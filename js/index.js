// bài 1

document.getElementById("btnLuong").onclick =function(){
    const luongMotNgay = parseFloat(document.getElementById('luongMotNgay').value);
    const soNgayLam = parseFloat(document.getElementById('soNgayLam').value);
    const luong = luongMotNgay * soNgayLam;
    
    document.getElementById("divTienLuong").style.display = "block";
    document.getElementById("xuatLuong").innerHTML = luong.toLocaleString(
      "vi",
      {
          currency:"VND",
          style:"currency",
      }

    );
};

// Bài 2

document.getElementById("btnTBC").onclick = function(){
    const soThu1 = parseFloat(document.getElementById('soThu1').value);
    const soThu2 = parseFloat(document.getElementById('soThu2').value);
    const soThu3 = parseFloat(document.getElementById('soThu3').value);
    const soThu4 = parseFloat(document.getElementById('soThu4').value);
    const soThu5 = parseFloat(document.getElementById('soThu5').value);
    const trungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
    document.getElementById("divTBC").style.display = "block";
    document.getElementById('xuatTBC').innerHTML = trungBinh.toFixed(2);
};

// bai3

document.getElementById("btnTienQD").onclick = function(){
    const quyDoiTien = parseFloat(document.getElementById('quyDoiTien').value);

    const tienDcQuyDoi = quyDoiTien * 23500;
    document.getElementById("divTienQD").style.display = "block";
    document.getElementById('xuatTienQD').innerHTML = new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(
        tienDcQuyDoi,
      );
    };

// bài 4
document.getElementById("btnTinh").onclick = function(){
    const chieuDai = (document.getElementById('chieuDai').value * 1);
    const chieuRong = (document.getElementById('chieuRong').value * 1);

    const chuVi = (chieuDai + chieuRong) /2;
    const dienTich = chieuDai * chieuRong;

    document.getElementById("divTinh").style.display = "block";
    document.getElementById('dienTich').innerHTML = dienTich;
    document.getElementById('chuVi').innerHTML = chuVi;
};

// bài 5

document.getElementById("btnTong").onclick = function(){
    const input = document.getElementById('input').value;
    const num1 = parseInt(input[0]);
    const num2 = parseInt(input[1]);

    document.getElementById("divTong").style.display = "block";
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('xuatTong').textContent = 'Vui lòng nhập hai chữ số hợp lệ';
        return;
    }

    const sum = num1 + num2;
    document.getElementById('xuatTong').textContent = `Tổng của ${num1} và ${num2} là ${sum}`;
}