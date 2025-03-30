import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';

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
    'Hello Creators!',
    'Hello Dreamers!'
  ];

  descriptions: string[] = [
    `Empowering businesses and individuals with cutting-edge web development, mobile apps, tech skills training, and consulting services. <br> Let’s build your future together.`,
    `From custom software and mobile apps to tech training and consulting, we deliver solutions tailored to your needs. Discover the technology that transforms.`,
    `We build websites, apps, and custom solutions while training tomorrow's tech leaders. Let’s innovate, learn, and grow together!`,
    `Your partner in web development, tech training, and IT consulting. Transforming ideas into impactful digital solutions—let’s make it happen!`
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

  activeIndex: number | null = null; // For active accordion item
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

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.startTextAnimation();
    this.startImageSlideshow(); // Start the image slideshow
  }

  ngAfterViewInit(): void {
    // Initialize carousels
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

    $('.owl-service-item').owlCarousel({
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

    const video = this.bgVideo.nativeElement;

    // Toggle play/pause on video click
    this.renderer.listen(video, 'click', () => {
      if (video.paused) {
        video.play().catch((err) => console.error('Error playing video:', err));
      } else {
        video.pause();
      }
    });

    

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
  }

  startTextAnimation(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.headings.length; // Cycle through headings and descriptions
      this.currentHeading = this.headings[this.currentIndex];
      this.startSlidingDescription(this.descriptions[this.currentIndex]);
    }, 8000); // Update every 8 seconds
  }

  startImageSlideshow(): void {
    this.imageIntervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 6) % this.headings.length; // Loop through images
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
}
