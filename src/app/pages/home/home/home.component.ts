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
  imageIntervalId!: any;
  displayedDescription: string = '';
  wordIndex: number = 0;

  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
  isVideoPlaying = false;
  manualPause: boolean = false; // ✅ Needed for manual control

  @ViewChildren('body') accordionBodies!: QueryList<ElementRef>;
  @ViewChild('servicesSliderTrack') servicesSliderTrack!: ElementRef<HTMLElement>;
  @ViewChildren('servicesMeetingItem') servicesMeetingItems!: QueryList<ElementRef>;
  @ViewChild('servicesPrev') servicesPrevArrow!: ElementRef<HTMLElement>;
  @ViewChild('servicesNext') servicesNextArrow!: ElementRef<HTMLElement>;
  @ViewChild('servicesDotsContainer') servicesDotsContainer!: ElementRef<HTMLElement>;

  activeAccordionIndex: number | null = null;
  openIndex: number | null = null;

  accordions = [
    {
      title: 'About Morrhtech Solutions',
      content: 'Discover innovative IT solutions with Morrhtech Solutions. We specialize in web development, mobile app development, IT consulting, and training on in-demand tech skills. Empower your business with our expertise.'
    },
    {
      title: 'Full-Stack Development Training',
      content: 'Master both frontend and backend technologies in our comprehensive Full-Stack Development course. Learn frameworks like Angular and Node.js, and build real-world projects to enhance your portfolio.'
    },
    {
      title: 'Empower Your Network',
      content: 'Spread the word about Morrhtech Solutions. Help others unlock their potential in tech by sharing our training and consulting services with your friends and colleagues.'
    },
    {
      title: 'Share Our Expertise',
      content: 'Let your colleagues know about Morrhtech Solutions’ offerings. From custom software development to IT staffing and recruitment, we have the right solutions for your business needs.'
    }
  ];

  private servicesSliderCurrentIndex: number = 0;
  private servicesItemsPerView: number = 2;
  private servicesTotalSlides: number = 0;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.startTextAnimation();
    this.startImageSlideshow();
  }

  ngAfterViewInit(): void {
    const video = this.bgVideo.nativeElement;

    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!this.manualPause) {
              video.play().then(() => {
                this.isVideoPlaying = true;
              }).catch(err => console.error('Error auto-playing video:', err));
            }
          } else {
            video.pause();
            this.isVideoPlaying = false;
          }
        });
      },
      { threshold: 0.5 }
    );

    videoObserver.observe(video);

    // Listen for manual toggle
    this.renderer.listen(video, 'click', () => this.toggleVideoPlay());

    // Owl Carousel init
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
    }

  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
    if (this.imageIntervalId) clearInterval(this.imageIntervalId);
  }

  toggleVideoPlay() {
    const video = this.bgVideo.nativeElement;
    if (video.paused) {
      video.play().then(() => {
        this.isVideoPlaying = true;
        this.manualPause = false; // ✅ Resumed manually
      }).catch(err => console.error('Error playing video:', err));
    } else {
      video.pause();
      this.isVideoPlaying = false;
      this.manualPause = true; // ✅ Paused manually
    }
  }

  startTextAnimation(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.headings.length;
      this.currentHeading = this.headings[this.currentIndex];
      this.startSlidingDescription(this.descriptions[this.currentIndex]);
    }, 8000);
  }

  startImageSlideshow(): void {
    this.imageIntervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 6) % this.headings.length;
    }, 8000);
  }

  startSlidingDescription(description: string): void {
    const words = description.split(' ');
    this.displayedDescription = '';
    this.wordIndex = 0;

    const wordInterval = setInterval(() => {
      if (this.wordIndex < words.length) {
        this.displayedDescription += words[this.wordIndex] + ' ';
        this.wordIndex++;
      } else {
        clearInterval(wordInterval);
      }
    }, 330);
  }

  toggleAccordion(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}