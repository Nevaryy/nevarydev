import { DOCUMENT } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    Inject,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subscription, combineLatest, tap } from 'rxjs';
import { selectLanguage } from 'src/app/store/settings-state/settings.selectors';

@Component({
    selector: 'nev-quicknav',
    templateUrl: './quicknav.component.html',
    styleUrl: './quicknav.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuicknavComponent implements OnInit, AfterViewInit, OnDestroy {
    private subscriptions: Subscription = new Subscription();
    anchors$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

    name = (id: string) => {
        return this.document.getElementById(id)?.textContent;
    };

    constructor(
        private store: Store,
        private router: Router,
        @Inject(DOCUMENT) private document: Document
    ) {}

    ngOnInit(): void {
        this.setAnchors();

        this.subscriptions.add(
            this.router.events.subscribe((event) => {
                this.setAnchors();

                if (event instanceof NavigationEnd) {
                    this.scrollToActiveLink(event.url);
                }
            })
        );

        this.subscriptions.add(
            this.store.select(selectLanguage).subscribe(() => {
                this.setAnchors();
            })
        );
    }

    ngAfterViewInit(): void {
        this.scrollToActiveLink(this.router.url);
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    setAnchors() {
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
