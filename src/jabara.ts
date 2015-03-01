/// <reference path="./lib/jabara-options.d.ts" />

class Jabara {
    private _titleElms: NodeList;
    private _titleE: HTMLElement;
    private _contentElms: NodeList;
    private _contentE: HTMLElement;
    private _contentHeightData: string[] = [];
    private _classNames = {
        arrowNone: "js-jabara-arrow-none",
        title    : "js-jabara-title",
        content  : "js-jabara-content",
        open     : "is-open"
    };

    constructor(options?: JabaraOptions) {
        this._titleElms = document.getElementsByClassName(this._classNames.title);
        this._contentElms = document.getElementsByClassName(this._classNames.content);

        var opts = this._setupOptions(options);

        if (!opts.arrow) {
            [].forEach.call(this._titleElms, (_titleE: HTMLElement) => {
                this._arrowNone(_titleE);
            });
        }

        [].forEach.call(this._contentElms, (_contentE: HTMLElement) => {
            this._contentHeightData.push(this._getElementHeight(_contentE));
            _contentE.style.transitionDuration = this._toSeconds(opts.duration);
        });
    }

    public toggle(toriggerE: HTMLElement): void {
        var index = this._indexOfElement(toriggerE);

        this._titleE = (<HTMLElement>this._titleElms[index]);
        this._contentE = (<HTMLElement>this._contentElms[index]);

        if (toriggerE.classList.contains(this._classNames.open)) {
            this._close();
            this._contentE.style.height = "0";
        } else {
            this._open();
            this._contentE.style.height = this._contentHeightData[index];
        }
    }

    private _open(): void {
        this._titleE.classList.add(this._classNames.open);
        this._contentE.classList.add(this._classNames.open);
    }

    private _close(): void {
        this._titleE.classList.remove(this._classNames.open);
        this._contentE.classList.remove(this._classNames.open);
    }

    private _setupOptions(options: JabaraOptions): JabaraOptions {
        if (!options) {
            return {
                arrow: true,
                duration: 200
            };
        }

        options.arrow = (options.arrow !== undefined) ? options.arrow : true;
        options.duration = (options.duration !== undefined) ? options.duration : 200;

        return options;
    }

    private _arrowNone(targetE: HTMLElement): void {
        targetE.classList.add(this._classNames.arrowNone);
    }

    private _toSeconds(milliseconds: number) {
        return (milliseconds / 1000) + "s";
    }

    private _getElementHeight(targetE: HTMLElement): string {
        var style = targetE.style;
        var height = "0";

        style.height = "auto";
        height = targetE.clientHeight + "px";
        style.height = "0";

        return height;
    }

    private _indexOfElement(targetE: HTMLElement): number {
        var parentE4TargetE = targetE.parentElement;
        var parentE = parentE4TargetE.parentElement;

        return [].indexOf.call(parentE.children, parentE4TargetE);
    }
}

(<any>window).Jabara = Jabara;
export = Jabara;
