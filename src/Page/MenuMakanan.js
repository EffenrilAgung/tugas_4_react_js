import React, { Component } from 'react'
import ListMakanan from '../ListData/ListMakanan'
class MenuMakanan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pesan: '',
            jumlah: 0,
            tampil: false,
        }
        this.pesanan = this.pesanan.bind(this)
        this.batal = this.batal.bind(this)
        this.nasipadang = this.nasipadang.bind(this)
        this.sate = this.sate.bind(this)
        this.uduk = this.uduk.bind(this)
        this.kuning = this.kuning.bind(this)
        this.soto = this.soto.bind(this)
    }
    pesanan(value, e) {
        this.setState({ [value]: e.target.value, tampil: true })
    }
    batal() {
        this.setState({
            pesan: '',
            jumlah: 0,
            tampil: false
        })
    }
    nasipadang() {
        this.setState({
            pesan: 'Nasi Padang',
            jumlah: this.state.jumlah + 1,
            tampil: true
        })
    }
    sate() {
        this.setState({
            pesan: 'Sate Padang',
            jumlah: this.state.jumlah + 1,
            tampil: true
        })
    }
    uduk() {
        this.setState({
            pesan: 'Nasi Uduk',
            jumlah: this.state.jumlah + 1,
            tampil: true
        })
    }
    kuning() {
        this.setState({
            pesan: 'Nasi Kuning',
            jumlah: this.state.jumlah + 1,
            tampil: true
        })
    }
    soto() {
        this.setState({
            pesan: "Soto Ayam Lamongan",
            jumlah: this.state.jumlah + 1,
            tampil: true
        })
    }
    render() {
        return (
            <div>
                <h3>Daftar Makanan Yang Kami Sediakan : </h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <ListMakanan Gambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg' />
                                <center>
                                    <button onClick={this.nasipadang}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan Gambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png' />
                                <center>
                                    <button onClick={this.sate}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan Gambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png' />
                                <center>
                                    <button onClick={this.soto}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan Gambar='https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png' />
                                <center>
                                    <button onClick={this.uduk}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan Gambar='https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg ' />
                                <center>
                                    <button onClick={this.kuning}>Pesan Sekarang</button>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <input type='text' onChange={e => this.pesanan('pesan', e)} placeholder='Masukkan Pesanan Anda' />
                <input type='number' placeholder='Jumlah Pesanan' onChange={e => this.pesanan('jumlah', e)} />
                <button onClick={this.batal}>Batalkan Pesanan</button>
                {this.state.tampil === true ? (
                    <div>
                        <h3>Masukkan Pesanan Anda : {this.state.pesan}</h3>
                        <h4>Masukkan Jumlah Pesanan Anda : {this.state.jumlah}</h4>
                    </div>
                ) : (
                    <center>
                        <h4>Anda Belum Melakukan Pemesanan</h4>
                    </center>
                )}
            </div>
        )
    }
}
export default MenuMakanan