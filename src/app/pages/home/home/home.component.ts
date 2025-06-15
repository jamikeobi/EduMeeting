import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';

// Ensure jQuery is still globally available if you're using it for other carousels
// If not, and you want to move away from it, those owlCarousel initializations would also need to be refactored.
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  // Carousel headings and descriptions
  headings: string[] = [
    'Hello Innovators!',
    'Hello Visionaries!',
    'Hello Creators!'    
  ];

  descriptions: string[] = [
    `Empowering businesses and individuals with cutting-edge web development, mobile apps, tech skills training, and consulting services. <br> Let’s build your future together.`,
    `From custom software and mobile apps to tech training and consulting, we deliver solutions tailored to your needs. Discover the technology that transforms.`,
    `We build websites, apps, and custom solutions while training tomorrow's tech leaders. Let’s innovate, learn, and grow together!`
  ];

  currentHeading: string = this.headings[0];
  currentDescription: string = '';
  currentIndex: number = 0;
  intervalId!: any;
  imageIntervalId!: any; // New interval ID for image slideshow
  displayedDescription: string = ''; // For dynamically showing sliding description
  wordIndex: number = 0;

  // Template references
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
  @ViewChildren('body') accordionBodies!: QueryList<ElementRef>;

  // New ViewChild references for the Services Slider
  @ViewChild('servicesSliderTrack') servicesSliderTrack!: ElementRef<HTMLElement>;
  @ViewChildren('servicesMeetingItem') servicesMeetingItems!: QueryList<ElementRef>;
  @ViewChild('servicesPrev') servicesPrevArrow!: ElementRef<HTMLElement>;
  @ViewChild('servicesNext') servicesNextArrow!: ElementRef<HTMLElement>;
  @ViewChild('servicesDotsContainer') servicesDotsContainer!: ElementRef<HTMLElement>;

  activeAccordionIndex: number | null = null; // Renamed for clarity to avoid conflict with `currentIndex` for slider
  accordions = [
    {
      title: 'About Morrhtech Solutions',
      content:
        'Discover innovative IT solutions with Morrhtech Solutions. We specialize in web development, mobile app development, IT consulting, and training on in-demand tech skills. Empower your business with our expertise.'
    },
    {
      title: 'Full-Stack Development Training',
      content:
        'Master both frontend and backend technologies in our comprehensive Full-Stack Development course. Learn frameworks like Angular and Node.js, and build real-world projects to enhance your portfolio.'
    },
    {
      title: 'Empower Your Network',
      content:
        'Spread the word about Morrhtech Solutions. Help others unlock their potential in tech by sharing our training and consulting services with your friends and colleagues.'
    },
    {
      title: 'Share Our Expertise',
      content:
        'Let your colleagues know about Morrhtech Solutions’ offerings. From custom software development to IT staffing and recruitment, we have the right solutions for your business needs.'
    }
  ];

  openIndex: number | null = null; // Open accordion index

  // Services Slider properties
  private servicesSliderCurrentIndex: number = 0;
  private servicesItemsPerView: number = 2; // Show 2 items at a time
  private servicesTotalSlides: number = 0;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.startTextAnimation();
    this.startImageSlideshow(); // Start the image slideshow
  }

  ngAfterViewInit(): void {
    // Initialize carousels (if using jQuery Owl Carousel for these)
    if (typeof $ !== 'undefined') {
      $('.owl-courses-item').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 }
        }
      });

      $('.owl-service-item').owlCarousel({ // This might be for a different service item carousel
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        margin: 20,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 }
        }
      });
    }


    const video = this.bgVideo.nativeElement;

    // Toggle play/pause on video click
    this.renderer.listen(video, 'click', () => {
      if (video.paused) {
        video.play().catch((err) => console.error('Error playing video:', err));
      } else {
        video.pause();
      }
    });

    // Initialize the new Services Slider
    this.initializeServicesSlider();

    // Trigger card animations
    this.initializeCardAnimations();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.imageIntervalId) {
      clearInterval(this.imageIntervalId); // Clear image slideshow interval
    }
    // No specific intervals for the services slider in this implementation,
    // but if you add auto-play, clear that interval here too.
  }

  startTextAnimation(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.headings.length; // Cycle through headings and descriptions
      this.currentHeading = this.headings[this.currentIndex];
      this.startSlidingDescription(this.descriptions[this.currentIndex]);
    }, 8000); // Update every 8 seconds
  }

  startImageSlideshow(): void {
    // This logic seems to just update `this.currentIndex` and not actually control an image slideshow.
    // If you have an image slideshow, its logic should be here.
    // For now, it just loops the index every 8 seconds for a reason that's not immediately clear.
    this.imageIntervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 6) % this.headings.length; // Loop through images (adjust as needed for actual images)
    }, 8000); // Change image every 8 seconds
  }

  startSlidingDescription(description: string): void {
    const words = description.split(' '); // Break description into words
    this.displayedDescription = ''; // Clear the previous description
    this.wordIndex = 0; // Reset word index

    const wordInterval = setInterval(() => {
      if (this.wordIndex < words.length) {
        this.displayedDescription += words[this.wordIndex] + ' ';
        this.wordIndex++;
      } else {
        clearInterval(wordInterval); // Stop once all words are displayed
      }
    }, 330); // Add a word every 330ms
  }

  toggleAccordion(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }

  private initializeCardAnimations(): void {
    // Using native DOM API here, which is fine, but be mindful of change detection if it affects Angular-managed properties.
    const cards = document.querySelectorAll('.meeting-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Add 'show' class when in view
          } else {
            entry.target.classList.remove('show'); // Remove class when out of view
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the card is visible
    );

    cards.forEach((card) => observer.observe(card));
  }

  // --- Services Slider Logic ---
  private initializeServicesSlider(): void {
    // Ensure all required elements are available in the DOM
    if (!this.servicesSliderTrack || this.servicesMeetingItems.length === 0 || !this.servicesDotsContainer) {
      console.warn('Services slider elements not found. Skipping initialization.');
      return;
    }

    const meetingItemsArray = this.servicesMeetingItems.toArray();
    this.servicesTotalSlides = Math.ceil(meetingItemsArray.length / this.servicesItemsPerView);

    // Clear existing dots and re-create, including arrows
    this.renderer.setProperty(this.servicesDotsContainer.nativeElement, 'innerHTML', ''); // Clear HTML

    // Append left arrow
    const prevArrowDiv = this.renderer.createElement('div');
    this.renderer.addClass(prevArrowDiv, 'slider-arrow');
    this.renderer.addClass(prevArrowDiv, 'left');
    this.renderer.setAttribute(prevArrowDiv, 'id', 'services-prev');
    const prevArrowIcon = this.renderer.createElement('i');
    this.renderer.addClass(prevArrowIcon, 'fa'); // Assuming Font Awesome
    this.renderer.addClass(prevArrowIcon, 'fa-chevron-left');
    this.renderer.appendChild(prevArrowDiv, prevArrowIcon);
    this.renderer.listen(prevArrowDiv, 'click', () => this.moveServicesSlider(-1));
    this.renderer.appendChild(this.servicesDotsContainer.nativeElement, prevArrowDiv);


    // Append dots
    for (let i = 0; i < this.servicesTotalSlides; i++) {
      const dot = this.renderer.createElement('div');
      this.renderer.addClass(dot, 'slider-dot');
      if (i === this.servicesSliderCurrentIndex) {
        this.renderer.addClass(dot, 'active');
      }
      this.renderer.setAttribute(dot, 'data-slide', i.toString());
      this.renderer.listen(dot, 'click', () => this.goToServicesSlide(i));
      this.renderer.appendChild(this.servicesDotsContainer.nativeElement, dot);
    }

    // Append right arrow
    const nextArrowDiv = this.renderer.createElement('div');
    this.renderer.addClass(nextArrowDiv, 'slider-arrow');
    this.renderer.addClass(nextArrowDiv, 'right');
    this.renderer.setAttribute(nextArrowDiv, 'id', 'services-next');
    const nextArrowIcon = this.renderer.createElement('i');
    this.renderer.addClass(nextArrowIcon, 'fa'); // Assuming Font Awesome
    this.renderer.addClass(nextArrowIcon, 'fa-chevron-right');
    this.renderer.appendChild(nextArrowDiv, nextArrowIcon);
    this.renderer.listen(nextArrowDiv, 'click', () => this.moveServicesSlider(1));
    this.renderer.appendChild(this.servicesDotsContainer.nativeElement, nextArrowDiv);

    // Initial update of the slider position and arrow visibility
    this.updateServicesSlider();

    // Listen for window resize to recalculate slider position
    this.renderer.listen('window', 'resize', () => {
      // Re-calculate slider position and visibility on resize
      this.updateServicesSlider();
    });
  }

  private updateServicesSlider(): void {
    if (!this.servicesSliderTrack || this.servicesMeetingItems.length === 0) return;

    const meetingItemsArray = this.servicesMeetingItems.toArray();
    // Use getComputedStyle to get the actual gap value from CSS
    const computedStyle = getComputedStyle(this.servicesSliderTrack.nativeElement);
    const gap = parseFloat(computedStyle.gap) || 0;

    // Get the actual rendered width of one item
    // It's safer to get the width of the first item, assuming all are uniform
    const itemWidth = meetingItemsArray[0].nativeElement.offsetWidth;

    // Calculate the total shift needed.
    // For `itemsPerView`, we shift by `itemsPerView` * `itemWidth` + (`itemsPerView` - 1) * `gap`
    const translateValue = this.servicesSliderCurrentIndex * (itemWidth * this.servicesItemsPerView + gap);
    this.renderer.setStyle(this.servicesSliderTrack.nativeElement, 'transform', `translateX(-${translateValue}px)`);

    // Update active dot
    const dots = this.servicesDotsContainer.nativeElement.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
      if (index === this.servicesSliderCurrentIndex) {
        this.renderer.addClass(dot, 'active');
      } else {
        this.renderer.removeClass(dot, 'active');
      }
    });

    // Update arrow visibility (assuming arrows are directly children of the container)
    const prevArrow = this.servicesDotsContainer.nativeElement.querySelector('#services-prev');
    const nextArrow = this.servicesDotsContainer.nativeElement.querySelector('#services-next');

    if (prevArrow) {
      this.renderer.setStyle(prevArrow, 'display', this.servicesSliderCurrentIndex === 0 ? 'none' : 'flex');
    }
    if (nextArrow) {
      this.renderer.setStyle(nextArrow, 'display', this.servicesSliderCurrentIndex === this.servicesTotalSlides - 1 ? 'none' : 'flex');
    }
  }

  moveServicesSlider(direction: number): void {
    this.servicesSliderCurrentIndex += direction;
    if (this.servicesSliderCurrentIndex < 0) {
      this.servicesSliderCurrentIndex = 0;
    } else if (this.servicesSliderCurrentIndex >= this.servicesTotalSlides) {
      this.servicesSliderCurrentIndex = this.servicesTotalSlides - 1;
    }
    this.updateServicesSlider();
  }

  goToServicesSlide(slideIndex: number): void {
    this.servicesSliderCurrentIndex = slideIndex;
    this.updateServicesSlider();
  }
}