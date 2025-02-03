import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {

  textList: string[] = [
    'Empowering Businesses with Cutting-Edge Tech Solutions.',
    'Innovative Web Development, Mobile Apps, and Tech Training Tailored for You.',
    'Your Partner in Technology: From Development to Training and Consulting.',
    'Morrhtech Solutions: Building Tomorrow’s Technology Today.',
    'Transforming Ideas into Digital Realities with Morrhtech Solutions.',
    'Delivering Excellence in Web Development, Training, and IT Outsourcing.',
    'Delivering Excellence in Web Development, Training, and IT Outsourcing.',
  ];

  currentText: string = this.textList[0];  // Initialize with the first text
  textIndex: number = 0;
  intervalTime: number = 10000; // Default interval (10 seconds)
  intervalId: any;

  ngOnInit(): void {
    this.adjustInterval();  // Set the interval based on the screen size
    this.startTextRotation(); // Start the text rotation
    window.addEventListener('resize', this.adjustInterval.bind(this)); // Listen to window resizing
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clean up the interval when component is destroyed
    }
    window.removeEventListener('resize', this.adjustInterval.bind(this)); // Remove resize event listener
  }

  // Function to change the interval based on screen size
  adjustInterval(): void {
    const screenWidth = window.innerWidth;

    // Adjust interval based on screen width
    if (screenWidth <= 480) {
      this.intervalTime = 6000; // 5 seconds for small screens
    } else if (screenWidth <= 768) {
      this.intervalTime = 7000; // 7 seconds for medium screens
    } else {
      this.intervalTime = 10000; // 10 seconds for large screens
    }

    // Restart the text rotation with the updated interval time
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clear previous interval
    }
    this.startTextRotation();
  }

  // Function to rotate through the text
  startTextRotation(): void {
    this.intervalId = setInterval(() => {
      this.textIndex = (this.textIndex + 1) % this.textList.length;
      this.currentText = this.textList[this.textIndex];
    }, this.intervalTime); // Use dynamic interval time
  }

  // Function to change text manually (if needed)
  changeText(): void {
    this.textIndex = (this.textIndex + 1) % this.textList.length;
    this.currentText = this.textList[this.textIndex];
  }
}
