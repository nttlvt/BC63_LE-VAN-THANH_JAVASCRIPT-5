function DSNV() {
    this.listNV = [];

    this.themNV = function (nhanVien) {
        this.listNV.push(nhanVien);
    }

    this.timViTriNV = function (maNV) {
        var index = -1;
        for (var i = 0; i < this.listNV.length; i++) {
            var nhanVien = this.listNV[i];
            if (maNV === nhanVien.maNV) {
                index = i;
                break;
            }
        }
        return index;
    }

    this.xoaNV = function (maNV) {
        var index = this.timViTriNV(maNV);

        if (index !== -1) {
            this.listNV.splice(index, 1);
        }
    }

    this.capNhatNV = function (nhanVien) {
        var index = this.timViTriNV(nhanVien.maNV);
        if (index !== -1) {
            this.listNV[index] = NhanVien;
        }
    }
}
