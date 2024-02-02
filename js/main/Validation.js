function Validation() {
    this.kiemTraRong = function (value, elementErrorId, messagError) {
        if (value === '') {
            getElement(elementErrorId).innerHTML = messagError
            return false
        }

        getElement(elementErrorId).innerHTML = ''
        return true
    }

    this.kiemTraDoDai = function (value, elementErrorId, messagError, min, max) {
        if (value.length < min || value.length > max) {
            getElement(elementErrorId).innerHTML = messagError
            return false
        }

        getElement(elementErrorId).innerHTML = ''
        return true
    }

    this.kiemTraSo = function (value, elementErrorId, messagError) {
        var pattern = /^[0-9]+$/
        var val = value.toString()

        if (val.match(pattern)) {
            getElement(elementErrorId).innerHTML = ''
            return true
        }

        getElement(elementErrorId).innerHTML = messagError
        return false
    }

    this.kiemTraPattern = function (value, elementErrorId, messagError, pattern) {
        if (value.match(pattern)) {
            getElement(elementErrorId).innerHTML = ''
            return true
        }

        getElement(elementErrorId).innerHTML = messagError
        return false
    }

    this.kiemTrMaNVTrung = function (maNV, dsnv, elementErrorId, messagError) {
        var index = -1

        for (var i = 0; i < dsnv.length; i++) {
            var nv = dsnv[i]
            if (nv.maNV === maNV) {
                index = i
                break
            }
        }

        if (index === -1) {
            getElement(elementErrorId).innerHTML = ''
            return true
        }

        getElement(elementErrorId).innerHTML = messagError
        return false
    }

    this.kiemTraChucVu = function (idSelect, elementErrorId, messagError) {


        var selectedIndex = getElement(idSelect).selectedIndex

        if (!selectedIndex) {
            getElement(elementErrorId).innerHTML = messagError
            return false
        }

        getElement(elementErrorId).innerHTML = ''
        return true
    }
    this.kiemTraL = function (value, elementErrorId, messagError, minL, maxL) {

        if (value < minL || value > maxL) {
            getElement(elementErrorId).innerHTML = messagError
            return false
        }

        getElement(elementErrorId).innerHTML = ''
        return true
    }
    this.validateNgayLam = function () {
        var ngayLamInput = document.getElementById("datepicker");
        var tbNgay = document.getElementById("tbNgay");
        var ngayLam = ngayLamInput.value;

        if (!ngayLam) {
            tbNgay.innerText = "Ngày làm không được để trống!";
            return;
        }

        var regex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
        if (!regex.test(ngayLam)) {
            tbNgay.innerText = "Định dạng ngày không hợp lệ (dd/mm/yyyy)!";

            return;
        }


        var parts = ngayLam.split("/");
        var day = parseInt(parts[0], 10);
        var month = parseInt(parts[1], 10);
        var year = parseInt(parts[2], 10);
        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            tbNgay.innerText = "Ngày làm không hợp lệ!";
            return;
        }


        var ngay = new Date(year, month - 1, day);
        if (ngay.getFullYear() !== year || ngay.getMonth() + 1 !== month || ngay.getDate() !== day) {
            tbNgay.innerText = "Ngày làm không hợp lệ!";
            return;
        }
    }

}
