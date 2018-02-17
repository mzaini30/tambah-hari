jQuery(function(){
	$('.convert').click(function(){
		sekarang = new Date();
		nanti = new Date();
		tambah = Number($('#hari').val());
		nanti.setDate(sekarang.getDate() + tambah);
		$('#hasil').val(nanti);
		nanti_indo = nanti.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
		$('#komentar').val('<!-- '+nanti_indo+' -->');
	});
});