"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddBlogpostComponent = void 0;
var core_1 = require("@angular/core");
var AddBlogpostComponent = /** @class */ (function () {
    function AddBlogpostComponent() {
        this.model = {
            title: '',
            shortDescription: '',
            content: '',
            featuredImageUrl: '',
            urlHandle: '',
            author: '',
            publishedDate: new Date(),
            isVisible: true
        };
    }
    AddBlogpostComponent.prototype.ngOnInit = function () { };
    AddBlogpostComponent.prototype.onFormSubmit = function () {
        throw new Error('Method not implemented.');
    };
    AddBlogpostComponent = __decorate([
        core_1.Component({
            selector: 'app-add-blogpost',
            templateUrl: './add-blogpost.component.html',
            styleUrls: ['./add-blogpost.component.css']
        })
    ], AddBlogpostComponent);
    return AddBlogpostComponent;
}());
exports.AddBlogpostComponent = AddBlogpostComponent;
