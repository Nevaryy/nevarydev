import { DOCUMENT } from '@angular/common';
import {
    AfterViewInit,
    Component,
    Inject,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, of } from 'rxjs';

@Component({
    selector: 'nev-quicknav',
    templateUrl: './quicknav.component.html',
    styleUrl: './quicknav.component.scss',
})
export class QuicknavComponent implements OnInit, AfterViewInit, OnDestroy {
    private subscriptions: Subscription = new Subscription();
    anchors: string[] = [];

    name = (id: string) => {
        return this.document.getElementById(id)?.textContent;
    };

    constructor(
        private router: Router,
        @Inject(DOCUMENT) private document: Document
    ) {}

    ngOnInit(): void {
        const anchors = this.document.querySelectorAll(
            'h1, h2, h3, h4, h5, h6'
        );

        this.anchors = Array.from(anchors)
            .map((anchor) => {
                return anchor.id;
            })
            .filter((id) => !!id);
    }

    ngAfterViewInit(): void {
        this.subscriptions.add(
            this.router.events.subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this.scrollToActiveLink(event.url);
                }
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    scrollToActiveLink(url: string): void {
        const id = url.split('#')[1];

        if (id) {
            const element = this.document.querySelector(`#${id}`);

            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }
    }
}
