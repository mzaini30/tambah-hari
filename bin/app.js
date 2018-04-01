jQuery(function(){
	$('#hari, #harga').keyup(function(){
		sekarang = new Date();
		nanti = new Date();
		tambah = Number($('#hari').val());
		harga = Number($('#harga').val());
		nanti.setDate(sekarang.getDate() + tambah);
		// $('#hasil').val(nanti);
		nanti_indo = nanti.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
		// $('#komentar').val('<!-- '+nanti_indo+' -->');
		$('#jekyll').val(`'${nanti}' # ${nanti_indo}`);
		$('#jumlah-harga').val((harga * tambah).toLocaleString('id-ID'));
	});
});