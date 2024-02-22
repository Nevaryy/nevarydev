import { DOCUMENT } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    Inject,
    OnDestroy,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Component({
    selector: 'nev-quicknav',
    templateUrl: './quicknav.component.html',
    styleUrl: './quicknav.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuicknavComponent implements AfterViewInit, OnDestroy {
    private subscriptions: Subscription = new Subscription();
    anchors$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

    name = (id: string) => {
        return this.document.getElementById(id)?.textContent;
    };

    constructor(
        private router: Router,
        @Inject(DOCUMENT) private document: Document
    ) {}

    ngAfterViewInit(): void {
        this.subscriptions.add(
            this.router.events.subscribe((event) => {
                const anchors = this.document.querySelectorAll(
                    'h1, h2, h3, h4, h5, h6'
                );
                this.anchors$.next(
                    Array.from(anchors)
                        .map((anchor) => {
                            return anchor.id;
                        })
                        .filter((id) => !!id)
                );

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
