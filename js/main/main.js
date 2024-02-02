var dsnv = new DSNV();
var validation = new Validation();

function getElement(id) {
    return document.getElementById(id);
}

function layThongTinNV(isAdd) {
    var maNV = getElement('tknv').value;
    var tenNV = getElement('name').value;
    var email = getElement('email').value;
    var matKhau = getElement('password').value;
    var ngayLam = getElement('datepicker').value;
    var chucVu = getElement('chucvu').value;
    var luongCoBan = getElement('luongCB').value;
    var gioLam = getElement('gioLam').value;
    var nhanVien = new NhanVien(maNV, tenNV, email, matKhau, ngayLam, chucVu, luongCoBan, gioLam);


    var isValid = true;
    isValid &=
        validation.kiemTraRong(maNV, 'tbTKNV', 'Tài khoản không được bỏ trống') &&
        validation.kiemTraDoDai(maNV, 'tbTKNV', 'Tài khoản từ 4 đến 6 ký tự', 4, 6) &&
        validation.kiemTraPattern(maNV, 'tbTKNV', 'Tài khoản phải là số', /^[0-9]+$/) &&
        validation.kiemTrMaNVTrung(maNV, dsnv.listNV, 'tbTKNV', 'Tài khoản đã tồn tại')
    isValid &= validation.kiemTraRong(tenNV, 'tbTen', 'Tên nhân viên không được bỏ trống')

    isValid &=
        validation.kiemTraRong(email, 'tbEmail', 'Email không được bỏ trống') &&
        validation.kiemTraPattern(
            email,
            'tbEmail',
            'Email không đúng định dạng',
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        )

    isValid &=
        validation.kiemTraRong(luongCoBan, 'tbLuongCB', 'Lương cơ bản không được bỏ trống') &&
        validation.kiemTraL(luongCoBan, 'tbLuongCB', 'Lương cơ bản từ 1 000 000 đến 20 000 000 đ ', 1000000, 2000000) &&
        validation.kiemTraPattern(luongCoBan, 'tbLuongCB', 'Lương cơ bản phải là số', /^[0-9]+$/)



    isValid &= validation.kiemTraChucVu('chucvu', 'tbChucVu', 'Vui lòng chọn chức vụ');


    isValid &=
        validation.kiemTraRong(gioLam, 'tbGiolam', 'Giờ làm không được bỏ trống') &&
        validation.kiemTraL(gioLam, 'tbGiolam', 'Giờ làm từ 80 đến 200 giờ ', 80, 200) &&
        validation.kiemTraPattern(gioLam, 'tbGiolam', 'Giờ làm phải là số', /^[0-9]+$/)
    isValid &= validation.validateNgayLam();


    // if (!isValid) {
    //     return null
    // }
    nhanVien.tinhTongLuong();
    nhanVien.xepLoai();
    return nhanVien;
}
function renderDSNV() {

    var content = ''
    for (var i = 0; i < dsnv.listNV.length; i++) {
        var nhanVien = dsnv.listNV[i]
        content += `
            <tr>
                <td>${nhanVien.maNV}</td>
                <td>${nhanVien.tenNV}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.ngayLam}</td>
                <td>${nhanVien.chucVu}</td>
                <td>${nhanVien.tongLuong}</td>
                <td>${nhanVien.xepLoai()}</td>
                <td>
                <button 
                    class="btn btn-danger" 
                    onclick="deleteNV('${nhanVien.maNV}')"
                >
                    Delete
                </button>
                <button 
                    class="btn btn-success ml-3" 
                    onclick="editNV('${nhanVien.maNV}')"
                >
                    Edit
                </button>
            </td>
            </tr>

        `
    }
    // console.log('content: ', content)
    getElement('tableDanhSach').innerHTML = content;
}
getElement('btnThemNV').onclick = function () {
    var nhanVien = layThongTinNV(true);

    if (nhanVien) {
        //B2: Thêm sinhVien vào trong dssv
        dsnv.themNV(nhanVien)
        console.log(dsnv.listNV)

        // Hiển thị dssv ra ngoài UI
        renderDSNV()

        // Lưu dssv vào local storage
        // setLocalStorage()
    }
}
function deleteNV(maNV) {

    dsnv.xoaNV(maNV);

    // Cập nhật lại hiển thị sau khi xóa sv thành công
    renderDSNV();

    // //  Lưu lại dssv vào local storage
    // setLocalStorage()
}
function editNV(maNV) {
    var index = dsnv.timViTriNV(maNV)
    var nhanVien = dsnv.listNV[index]

    getElement('tknv').value = nhanVien.maNV
    getElement('name').value = nhanVien.tenNV
    getElement('email').value = nhanVien.email;
    getElement('password').value = nhanVien.matKhau;
    getElement('datepicker').value = nhanVien.ngayLam
    getElement('chucvu').value = nhanVien.chucVu;
    getElement('luongCB').value = nhanVien.luongCB;
    getElement('gioLam').value = nhanVien.gioLam;


}
