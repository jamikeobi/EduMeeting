import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  isMenuOpen = false; // Tracks the state of the main menu
  activeDropdown: string | null = null; // Tracks the currently open dropdown

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(menu: string): void {
    this.activeDropdown = this.activeDropdown === menu ? null : menu;
  }

  ngAfterViewInit(): void {
    // Accessing the necessary DOM elements
    const hamburger: HTMLElement | null = this.elementRef.nativeElement.querySelector('#hamburger');
    const mobileNavbar: HTMLElement | null = this.elementRef.nativeElement.querySelector('#mobile-navbar');

    if (hamburger && mobileNavbar) {
      // Adding event listener to toggle mobile menu visibility
      this.renderer.listen(hamburger, 'click', () => {
        if (mobileNavbar.classList.contains('hidden')) {
          this.renderer.removeClass(mobileNavbar, 'hidden');
          this.renderer.addClass(mobileNavbar, 'block');
        } else {
          this.renderer.removeClass(mobileNavbar, 'block');
          this.renderer.addClass(mobileNavbar, 'hidden');
        }
      });
    }

    // Dropdown example for mobile services
    const mobileServicesDropdown: HTMLElement | null = this.elementRef.nativeElement.querySelector('#mobile-services-dropdown');
    const mobileServicesMenu: HTMLElement | null = this.elementRef.nativeElement.querySelector('#mobile-services-menu');

    if (mobileServicesDropdown && mobileServicesMenu) {
      this.renderer.listen(mobileServicesDropdown, 'click', () => {
        if (mobileServicesMenu.classList.contains('hidden')) {
          this.renderer.removeClass(mobileServicesMenu, 'hidden');
        } else {
          this.renderer.addClass(mobileServicesMenu, 'hidden');
        }
      });
    }

    // Dropdown functionality for multiple menus
    const dropdowns = [
      { trigger: '#mobile-software-dropdown', menu: '#mobile-software-menu' },
      { trigger: '#mobile-it-hiring-dropdown', menu: '#mobile-it-hiring-menu' },
      { trigger: '#mobile-tech-talent-dropdown', menu: '#mobile-tech-talent-menu' },
      { trigger: '#mobile-training-dropdown', menu: '#mobile-training-menu' }
    ];

    dropdowns.forEach(({ trigger, menu }) => {
      const dropdownTrigger: HTMLElement | null = this.elementRef.nativeElement.querySelector(trigger);
      const dropdownMenu: HTMLElement | null = this.elementRef.nativeElement.querySelector(menu);

      if (dropdownTrigger && dropdownMenu) {
        this.renderer.listen(dropdownTrigger, 'click', () => {
          if (dropdownMenu.classList.contains('hidden')) {
            this.renderer.removeClass(dropdownMenu, 'hidden');
          } else {
            this.renderer.addClass(dropdownMenu, 'hidden');
          }
        });
      }
    });
  }
}
