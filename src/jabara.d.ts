/// <reference path="lib/jabara-options.d.ts" />
declare class Jabara {
    private _titleElms;
    private _titleE;
    private _contentElms;
    private _contentE;
    private _contentHeightData;
    private _classNames;
    constructor(options?: JabaraOptions);
    toggle(toriggerE: HTMLElement): void;
    private _open();
    private _close();
    private _setupOptions(options);
    private _arrowNone(targetE);
    private _toSeconds(milliseconds);
    private _getElementHeight(targetE);
    private _indexOfElement(targetE);
}
export = Jabara;
