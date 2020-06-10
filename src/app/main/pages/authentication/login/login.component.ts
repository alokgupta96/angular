import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { FuseConfigService } from '../../../../../@fuse/services/config.service';
import { fuseAnimations } from '../../../../../@fuse/animations';
import { ApiService } from '../../../../services/api.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})

export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    result: any;
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private apiService: ApiService,
        private router: Router,
        private spinner: NgxSpinnerService,
        private messageService: MessageService,
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    login() {
        const data = {
            "email": this.loginForm.value.email,
            "password": this.loginForm.value.password
        }
        this.apiService.login(data).subscribe(result => {
            this.result = result;
        },
            (err) => {
                this.messageService.add({ severity: 'error', summary: 'error Message', detail: err.message });
            },
            () => {
                if (this.result.status === 'success') {
                    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: this.result.message });
                    localStorage.setItem('token', this.result.token);
                    this.router.navigate(['/dashboard']);
                } else {
                    this.messageService.add({ severity: 'error', summary: 'error Message', detail: this.result.message });
                }
            });
    }

}
