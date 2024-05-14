var Atlagsebesseg = /** @class */ (function () {
    function Atlagsebesseg() {
        this.startBind();
        this.eventHandler();
    }
    Atlagsebesseg.prototype.startBind = function () {
        this.idoInput = document.querySelector('#ido');
        this.utInput = document.querySelector('#ut');
        this.atlagInput = document.querySelector('#atlag');
        this.szamitGomb = document.querySelector('#szamitGomb');
    };
    Atlagsebesseg.prototype.eventHandler = function () {
        var _this = this;
        var _a;
        (_a = this.szamitGomb) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            _this.onClickCalcButton();
        });
    };
    Atlagsebesseg.prototype.onClickCalcButton = function () {
        if (this.utInput && this.idoInput) {
            var ut = Number(this.utInput.value);
            var ido = Number(this.idoInput.value);
            this.atlag = this.calcAverageSpeed(ut, ido);
            this.renderResult();
        }
    };
    Atlagsebesseg.prototype.calcAverageSpeed = function (path, time) {
        return path / time;
    };
    Atlagsebesseg.prototype.renderResult = function () {
        if (this.atlagInput) {
            this.atlagInput.value = String(this.atlag);
        }
    };
    return Atlagsebesseg;
}());
new Atlagsebesseg();
