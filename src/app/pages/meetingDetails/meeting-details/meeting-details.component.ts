import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.css']
})

export class MeetingDetailsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const joinUsSection = document.getElementById("joinUsSection");

    if (joinUsSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateJoinUs();
            observer.unobserve(joinUsSection); // Run only once
          }
        });
      }, { threshold: 0.5 }); // Trigger when 50% visible

      observer.observe(joinUsSection);
    }
  }

  animateJoinUs() {
    const text = "Join us at Morrhtech Solutions and take the next step in your technology journey!";
    const words = text.split(" ");
    const container = document.getElementById("animatedText");
    let i = 0;

    function showWord() {
      if (i < words.length) {
        container!.innerHTML += words[i] + " ";
        i++;
        setTimeout(showWord, 200);
      }
    }
    showWord();
  }

}
