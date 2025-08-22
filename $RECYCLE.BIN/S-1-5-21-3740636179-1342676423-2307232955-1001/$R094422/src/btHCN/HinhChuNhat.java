package btHCN;

public class HinhChuNhat {
	// khai bao thuoc tinh
	private double chieuDai;
	private double chieuRong;
	// dong goi va rang buoc
	public void setChieuDai(double d) throws Exception { 
		if (d > 0) {
			this.chieuDai=d;
		} else throw new Exception("Loi d");
		
	}
	public void setChieuRong(double r) throws Exception { 
		if (r > 0) {
			this.chieuRong=r;
		} else throw new Exception("Loi r");
		
	}
	public double getChieuDai() {
  		return this.chieuDai;
	}  
	public double getChieuRong() {
  		return this.chieuRong;
	}  
	// Ham tao 
	public HinhChuNhat() {}
	public HinhChuNhat(double d, double r) throws Exception {
		if (d > 0) {
			this.chieuDai=d;
		} else throw new Exception("Loi d");
		if (r > 0) {
			this.chieuRong=r;
		} else throw new Exception("Loi r");
	}
	// phuong thuc getChuVi()
	public double getChuVi() {
		return (getChieuDai()+getChieuRong())*2;
	}
	// pt getDienTich()
	public double getDienTich(double d, double r) {
		return d*r;
	}
	// mau inTieuDe()
	public static void inTieuDe() {
		System.out.println("Bang dien tich, chu vi hinh chu nhat");
		for (int i = 0; i < 45; i++) {
			System.out.printf("-");
			}
		System.out.println(); 
	}
				
}
