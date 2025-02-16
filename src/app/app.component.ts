import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { MemoryLocation } from './memory-location.model';
import { MemoryService } from './memory.service';
declare let L: any;

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('mapContainer') mapContainer!: ElementRef;
  isModalOpen: boolean = false;
  memories: MemoryLocation[] = [];
  selectedMemory: MemoryLocation | null = null;
  private map: any;
  private markers: any[] = [];
  private isBrowser: boolean;
  showScrollButton = false;
  
  constructor(
    private memoryService: MemoryService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.memories = this.memoryService.getMemories();
  }

  ngAfterViewInit() {
    // Only initialize the map in the browser
    if (this.isBrowser) {
      // Wait for the DOM to be ready
      setTimeout(() => {
        this.initializeMap();
      }, 0);
    }
  }

  private initializeMap() {
    try {
      // Initialize the map
      this.map = L.map(this.mapContainer.nativeElement).setView([40.7128, -74.0060], 12);
      
      // Add the OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      // Create custom heart icon
      const heartIcon = L.icon({
        iconUrl: './heart.png',  // Make sure to put heart.png in your assets folder
        iconSize: [32, 32],          // Size of the icon
        iconAnchor: [16, 32],        // Point of the icon which will correspond to marker's location
        popupAnchor: [0, -32]        // Point from which the popup should open relative to the iconAnchor
      });

      // Add markers for each memory using the heart icon
      this.memories.forEach(memory => {
        const marker = L.marker(memory.coordinates, { icon: heartIcon })
          .addTo(this.map)
          .bindPopup(`
            <div class="text-center">
              <h3 class="font-bold text-rose-600">${memory.name}</h3>
              <p class="text-sm text-gray-600">${memory.date}</p>
            </div>
          `, {
            className: 'custom-popup'  // You can style this with CSS if you want
          })
          .on('click', () => this.selectMemory(memory));
        
        this.markers.push(marker);
      });

      // Fit the map to show all markers
      const group = L.featureGroup(this.markers);
      this.map.fitBounds(group.getBounds().pad(0.1));
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }


  selectMemory(memory: MemoryLocation) {
    this.selectedMemory = memory;
    
    if (this.isBrowser && this.map) {
      // Find the marker for this memory and open its popup
      const marker = this.markers.find(m => 
        m.getLatLng().lat === memory.coordinates[0] && 
        m.getLatLng().lng === memory.coordinates[1]
      );
      
      if (marker) {
        marker.openPopup();
        this.map.setView(marker.getLatLng(), 14);
      }
    }
  }
  openImageModal() {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeImageModal() {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  // Add keyboard event listener for Escape key
  @HostListener('window:keydown.escape')
  handleEscKey() {
    if (this.isModalOpen) {
      this.closeImageModal();
    }
  }
  navigateMemory(direction: 'prev' | 'next') {
    if (!this.selectedMemory) return;
    
    const currentIndex = this.memories.findIndex(m => m.id === this.selectedMemory!.id);
    let newIndex: number;
    
    if (direction === 'prev') {
      newIndex = currentIndex - 1;
    } else {
      newIndex = currentIndex + 1;
    }
    
    if (newIndex >= 0 && newIndex < this.memories.length) {
      this.selectMemory(this.memories[newIndex]);
    }
  }

  hasPreviousMemory(): boolean {
    if (!this.selectedMemory) return false;
    const currentIndex = this.memories.findIndex(m => m.id === this.selectedMemory!.id);
    return currentIndex > 0;
  }

  hasNextMemory(): boolean {
    if (!this.selectedMemory) return false;
    const currentIndex = this.memories.findIndex(m => m.id === this.selectedMemory!.id);
    return currentIndex < this.memories.length - 1;
  }

  // Add keyboard navigation
  @HostListener('window:keydown', ['$event'])
  handleKeyboardNavigation(event: KeyboardEvent) {
    if (this.selectedMemory) {
      if (event.key === 'ArrowLeft' && this.hasPreviousMemory()) {
        event.preventDefault();
        this.navigateMemory('prev');
      }
      if (event.key === 'ArrowRight' && this.hasNextMemory()) {
        event.preventDefault();
        this.navigateMemory('next');
      }
    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      this.showScrollButton = window.scrollY > 300;
    }
  }

  // Add this method to handle the scroll to top
  scrollToTop() {
    if (this.isBrowser) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
