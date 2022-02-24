import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private router: Router) {
    }

    // FIXME: Remove empty onInit
    ngOnInit(): void {
    }

    async home(): Promise<void> {
        try {
            await this.router.navigateByUrl('/home');
            // if curious, see:
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
        } catch (e) {
            console.error(e);
        }
    }
}
