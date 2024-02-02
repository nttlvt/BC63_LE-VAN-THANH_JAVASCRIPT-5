// Khởi tạo lớp đối tượng sinh viên
function NhanVien(maNV, tenNV, email, matKhau, ngayLam, chucVu, luongCoBan, gioLam) {
    this.maNV = maNV;
    this.tenNV = tenNV;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.chucVu = chucVu;
    this.luongCoBan = luongCoBan;
    this.gioLam = gioLam;
    this.tongLuong = 0;

    // method
    this.tinhTongLuong = function () {
        switch (this.chucVu) {
            case "Sếp":
                this.tongLuong = this.luongCoBan * 3;
                break;
            case "Trưởng phòng":
                this.tongLuong = this.luongCoBan * 2;
                break;
            case "Nhân viên":
                this.tongLuong = this.luongCoBan;
                break;
        }
        return this.tongLuong;
    }
    this.xepLoai = function () {
        if (this.gioLam >= 192) {
            return "Nhân viên xuất sắc";
        } else if (this.gioLam >= 176) {
            return "Nhân viên giỏi";
        } else if (this.gioLam >= 160) {
            return "Nhân viên khá";
        } else {
            return "Nhân viên trung bình";
        }
    };
}
