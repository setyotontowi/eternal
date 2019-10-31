<!DOCTYPE html>
<html>
<head>
	<title>Eternal</title>
	<link rel="shortcut icon" type="image/png" href="dist/img/restore-16px.png"/>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" type="text/css" href="dist/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="dist/css/main-t.css">

	<script type="text/javascript" src="dist/js/jquery-1.12.4.js"></script>
</head>
<body>
<div class="wrapper">
<div class="container-fluid h-100">
	<div class="side sidebar">
		<ul class="list-group list-group-horizontal">
			<li class="list-group-item pb-0 flex-fill">
				<abbr title="Notes"><img src="dist/img/add-24px.svg"></abbr>
			</li>
			<li class="list-group-item pb-0 flex-fill">
				<abbr title="Notes"><img src="dist/img/book-line-24px.svg"></abbr>
			</li>
			<li class="list-group-item pb-0 flex-fill">
				<abbr title="Days"><img src="dist/img/fire-line-24px.svg"></abbr>
			</li>
			<li class="list-group-item pb-0 flex-fill">
				<abbr title="Targets"><img src="dist/img/eco-line-24px.svg"></abbr>
			</li>
		</ul>
	</div>

	<div class="side content container-fluid">
		<div class="row">
			<section class="main col-md-6">
				<header class="header main-title p-3 my-3">
					<div class="d-inline-block">
						<h1>Eternal</h1>
						<h2>Daily Management System</h2>
					</div>
					<div class="d-inline-block float-right" style="line-height: 2.5">
						<img src="dist/img/round_restore_white_24dp.png" width="24dp">
					</div>
				</header>
				<div class="season season-title p-3">
					<div class="season season-desc">
						<p class="d-inline">Season 4<span>th</span></p>
						<p class="d-inline float-right">13 <span>Days</span>, 34 <span>Minutes</span>, 24 <span>Seconds</span></p>
					</div>
					<h3>Lunabrica</h3>
				</div>
				<div class="phrase phrase-container pb-3 px-3">
					<div class="card-container">
						<div class="card my-2 p-4">
							Dari dulu, saya sangat suka menulis. catatan-catatan mengenai apapun bisa anda temukan di kamar, di rak-rak buku, atau di tumpukan kardus-kardus bekas. bahkan, catatan itu juga terselip di media digital seperti laptop atau di smartphone saya. 
							<div class="row mt-4">
								<div class="col-md-6" style="color: #00ff8c; padding: 0">Hari Ke-3</div>
								<div class="col-md-6" style="text-align: right;">
									<img src="dist/img/pencil-24px.svg" width="18dp">
								</div>
							</div> 
						</div>
						<div class="card my-2 p-4">
							Kegiatan menulis ini telah menjadi salah satu bagian dari hobi saya selama bertahun-tahun semenjak sekolah menengah. tentu saja, bobot dan isi dari tulisan juga semakin beragam.

							<div class="row mt-4">
								<div class="col-md-6" style="padding: 0">Hari Ke-1</div>
								<div class="col-md-6 d-none" style="text-align: right;">
									<img src="dist/img/pencil-24px.svg" width="18dp">
								</div>
							</div> 
						</div>
						<div class="card my-2 p-4">Hello World</div>
						<div class="card my-2 p-4">Hello World</div>
						<div class="card my-2 p-4">Hello World</div>
						<div class="card my-2 p-4">Hello World</div>
					</div>
				</div>
			</section>
			<section class="calendar-outer col-md-6">
				<div class="row calendar-desc my-3">
					<div class="col-md-4 desc-header btn-group" role="group">
						<div class="btn btn-primary"><img src="dist/img/round_keyboard_arrow_left_black_24dp.png"></div>
						<div class="btn btn-primary"><img src="dist/img/dot-24px.svg" width="14dp"></div>
						<div class="btn btn-primary"><img src="dist/img/round_navigate_next_black_24dp.png"></div>
					</div>
					<div class="col-md-8 desc-header">
						<input name="year" value="2019"/>
						<select class="">
							<option>January</option>
							<option>February</option>
							<option>March</option>
							<option>April</option>
							<option>May</option>
							<option>June</option>
							<option>July</option>
							<option>August</option>
							<option selected>September</option>
							<option>October</option>
							<option>November</option>
							<option>December</option>
						</select>

					</div>
				</div>
				<div class="calendar-container">
					<div class="calendar" id="calendar"></div>
				</div>
			</section>
		</div>
	</div>
</div>
</div>		

<script type="text/javascript" src="dist/js/calendar-engine.js"></script>
</body>
</html>