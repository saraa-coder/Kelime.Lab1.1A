/**
 * JUEGO DE VOCABULARIO TURCO-ESPAÑOL 
 * Kelime Lab 1.1A
 */

// 1. BASE DE DATOS DE PALABRAS
const allWords = [
    {word:"aç",correct:"hambriento/a"},{word:"açık",correct:"abierto / claro (color)"},{word:"açmak",correct:"abrir"},
    {word:"ad (isim)",correct:"nombre"},{word:"adres",correct:"dirección"},{word:"Affedersiniz",correct:"Perdone"},
    {word:"Afiyet olsun",correct:"Buen provecho"},{word:"ağaç",correct:"árbol"},{word:"Ağustos",correct:"Agosto"},
    {word:"Akrep Burcu",correct:"Escorpio"},{word:"akşam",correct:"tarde / noche"},{word:"alışveriş",correct:"compras"},
    {word:"alkol",correct:"alcohol"},{word:"Almanya",correct:"Alemania"},{word:"alt",correct:"debajo"},
    {word:"anahtar",correct:"llave"},{word:"anlamak",correct:"entender"},{word:"anneler günü",correct:"día de la madre"},
    {word:"araba",correct:"coche"},{word:"Aralık",correct:"Diciembre"},{word:"aramak",correct:"buscar / llamar"},
    {word:"arkadaş",correct:"amigo/a"},{word:"artı",correct:"más (suma)"},{word:"Aslan Burcu",correct:"Leo"},
    {word:"avukat",correct:"abogado/a"},{word:"Avusturya",correct:"Austria"},{word:"ay",correct:"mes / luna"},
    {word:"aynı",correct:"mismo"},{word:"az",correct:"poco"},{word:"baba",correct:"padre"},
    {word:"bahçe",correct:"jardín"},{word:"bakmak",correct:"mirar"},{word:"bale",correct:"ballet"},
    {word:"balık",correct:"pescado"},{word:"Balık Burcu",correct:"Piscis"},{word:"banka",correct:"banco"},
    {word:"banyo yapmak",correct:"bañarse"},{word:"bardak",correct:"vaso"},{word:"Başak Burcu",correct:"Virgo"},
    {word:"başarılı",correct:"exitoso/a"},{word:"başlamak",correct:"empezar"},{word:"bavul",correct:"maleta"},
    {word:"bay",correct:"señor"},{word:"bayan",correct:"dama"},{word:"bayılmak",correct:"desmayarse / encantar"},
    {word:"bayram",correct:"fiesta / festivo"},{word:"bebek",correct:"bebé"},{word:"bekâr",correct:"soltero/a"},
    {word:"beraber",correct:"juntos/as"},{word:"beslenmek",correct:"alimentarse"},{word:"bey",correct:"señor"},
    {word:"beyaz",correct:"blanco"},{word:"bilet",correct:"billete / ticket"},{word:"biletçi",correct:"taquillero/a"},
    {word:"bilgisayar",correct:"ordenador"},{word:"bilgisayar oyunu",correct:"videojuego"},{word:"bilmek",correct:"saber"},
    {word:"bina",correct:"edificio"},{word:"binmek",correct:"subir / montar"},{word:"birçok",correct:"muchos/as"},
    {word:"biriktirmek",correct:"ahorrar / acumular"},{word:"bitmek",correct:"terminar"},{word:"Boğa Burcu",correct:"Tauro"},
    {word:"bol bol",correct:"en abundancia / muchísimo"},{word:"Bol şanslar",correct:"Buena suerte"},
    {word:"bölü",correct:"dividido por, entre"},{word:"borç",correct:"deuda"},{word:"boş",correct:"vacío/a, libre"},
    {word:"boş zaman",correct:"tiempo libre"},{word:"büfe",correct:"quiosco"},{word:"bugün",correct:"hoy"},
    {word:"bulaşık",correct:"vajilla"},{word:"buluşmak",correct:"encontrarse"},{word:"burada",correct:"aquí"},
    {word:"burçlar",correct:"signos del zodíaco"},{word:"büro",correct:"oficina"},{word:"bütün",correct:"todo/a"},
    {word:"büyük",correct:"grande"},{word:"çalışkan",correct:"trabajador/a"},{word:"çalışmak",correct:"trabajar / estudiar"},
    {word:"çamaşır",correct:"colada / ropa"},{word:"cami",correct:"mezquita"},{word:"çanta",correct:"bolso"},
    {word:"çarpı",correct:"por (multiplicar)"},{word:"Çarşamba",correct:"Miércoles"},{word:"çarşı",correct:"mercado"},
    {word:"çay",correct:"té"},{word:"çenesiz",correct:"muy hablador/a"},{word:"cesur",correct:"valiente"},
    {word:"cetvel",correct:"regla"},{word:"cevap",correct:"respuesta"},{word:"ceviz",correct:"nuez"},
    {word:"çiçek",correct:"flor"},{word:"ciddi",correct:"serio/a"},{word:"çıkmak",correct:"salir"},
    {word:"Çin",correct:"China"},{word:"çirkin",correct:"feo/a"},{word:"çocuk",correct:"niño/a"},
    {word:"çok",correct:"muy, mucho/a, muchos/as"},{word:"Çok yaşa",correct:"Salud (estornudo)"},
    {word:"çöp kutusu",correct:"papelera"},{word:"Cuma",correct:"Viernes"},{word:"Cumartesi",correct:"Sábado"},
    {word:"çünkü",correct:"porque"},{word:"dağınık",correct:"desordenado/a"},{word:"dalgalı saçlı",correct:"pelo ondulado"},
    {word:"dans",correct:"danza"},{word:"dar",correct:"estrecho/a"},{word:"defter",correct:"cuaderno"},
    {word:"değişik",correct:"diferente"},{word:"demek",correct:"decir"},{word:"deniz",correct:"mar"},
    {word:"dergi",correct:"revista"},{word:"ders",correct:"clase / lección"},{word:"dikkatli",correct:"cuidadoso/a"},
    {word:"dikkatsiz",correct:"descuidado/a"},{word:"dinlemek",correct:"escuchar"},{word:"dinlenmek",correct:"descansar"},
    {word:"dışarı",correct:"afuera"},{word:"dizi",correct:"serie"},{word:"doğum günü",correct:"cumpleaños"},
    {word:"doğum tarihi",correct:"fecha nacimiento"},{word:"dolap",correct:"armario"},{word:"dolaşmak",correct:"pasear"},
    {word:"dolu",correct:"lleno/a"},{word:"domates",correct:"tomate"},{word:"dönmek",correct:"volver"},
    {word:"dosya",correct:"archivo"},{word:"düğün",correct:"boda"},{word:"durak",correct:"parada"},
    {word:"durmak",correct:"parar"},{word:"duş almak",correct:"ducharse"},{word:"duvar",correct:"pared"},
    {word:"düz saçlı",correct:"pelo liso"},{word:"düzenli",correct:"ordenado/a"},{word:"eczacı",correct:"farmacéutico/a"},
    {word:"eczane",correct:"farmacia"},{word:"eğlenceli",correct:"divertido/a"},{word:"Ekim",correct:"Octubre"},
    {word:"ekmek",correct:"pan"},{word:"ekonomi",correct:"economía"},{word:"eksi",correct:"menos"},{word:"derece",correct:"grado"},
    {word:"elbise",correct:"vestido / ropa"},{word:"elma",correct:"manzana"},{word:"emekli",correct:"jubilado/a"},
    {word:"erkek",correct:"hombre"},{word:"erken",correct:"temprano"},{word:"eş",correct:"esposo/a, cónyuge"},
    {word:"eski",correct:"antiguo/a"},{word:"esmer",correct:"moreno/a"},{word:"etmek",correct:"hacer (auxiliar)"},
    {word:"ev",correct:"casa"},{word:"evli",correct:"casado/a"},{word:"Eylül",correct:"Septiembre"},
    {word:"fabrika",correct:"fábrica"},{word:"fakir",correct:"pobre"},{word:"fare",correct:"ratón"},
    {word:"farklı",correct:"diferente"},{word:"fikir",correct:"idea"},{word:"film",correct:"película"},
    {word:"fındık",correct:"avellana"},{word:"fırça",correct:"cepillo"},{word:"fırın",correct:"horno"},
    {word:"fotoğraf çekmek",correct:"hacer fotos"},{word:"Fransa",correct:"Francia"},{word:"futbol",correct:"fútbol"},
    {word:"futbolcu",correct:"futbolista"},{word:"garson",correct:"camarero/a"},{word:"gazete",correct:"periódico"},
    {word:"geç",correct:"tarde"},{word:"geçmek",correct:"pasar"},{word:"Geçmiş olsun",correct:"Que te mejores"},
    {word:"gelmek",correct:"venir"},{word:"genç",correct:"joven"},{word:"genellikle",correct:"generalmente"},
    {word:"geniş",correct:"ancho/a"},{word:"gezi",correct:"excursión"},{word:"gezmek",correct:"pasear / viajar"},
    {word:"girmek",correct:"entrar"},{word:"gitar",correct:"guitarra"},{word:"gitmek",correct:"ir"},
    {word:"gökkuşağı",correct:"arcoíris"},{word:"görüşmek",correct:"verse / reunirse"},{word:"Görüşürüz",correct:"Nos vemos"},
    {word:"gösteri",correct:"espectáculo"},{word:"göz",correct:"ojo"},{word:"gri",correct:"gris"},
    {word:"güçlü",correct:"fuerte"},{word:"güçsüz",correct:"débil"},{word:"gül",correct:"rosa (flor)"},
    {word:"Güle güle",correct:"Adiós (quien se queda)"},{word:"gün",correct:"día"},{word:"Günaydın",correct:"Buenos días"},
    {word:"gündüz",correct:"de día"},{word:"güzel",correct:"bonito/a, guapa"},{word:"hafta içi",correct:"entre semana"},
    {word:"hafta sonu",correct:"fin de semana"},{word:"hâl",correct:"estado / salud"},{word:"halı",correct:"alfombra"},
    {word:"hanım",correct:"señora"},{word:"hasta",correct:"enfermo/a"},{word:"hastalık",correct:"enfermedad"},
    {word:"hastane",correct:"hospital"},{word:"hava",correct:"aire / tiempo"},{word:"havuç",correct:"zanahoria"},
    {word:"hayal",correct:"sueño / ilusión"},{word:"hayat",correct:"vida"},{word:"hazır",correct:"listo/a, preparado/a"},
    {word:"Haziran",correct:"Junio"},{word:"hazırlamak",correct:"preparar"},{word:"hazırlanmak",correct:"prepararse"},
    {word:"hediye",correct:"regalo"},{word:"hemşire",correct:"enfermero/a"},{word:"her",correct:"cada"},
    {word:"her zaman",correct:"siempre"},{word:"heyecanlı",correct:"emocionado/a"},{word:"hiç",correct:"nada / nunca"},
    {word:"hiçbir zaman",correct:"nunca"},{word:"hızlı",correct:"rápido/a"},{word:"Hoş bulduk",correct:"Respuesta a bienvenida"},
    {word:"Hoş geldin",correct:"Bienvenido/a"},{word:"Hoşça kal",correct:"Adiós (quien se va)"},{word:"hoşlanmak",correct:"gustar"},
    {word:"hukuk",correct:"derecho"},{word:"içecek",correct:"bebida"},{word:"içeri",correct:"adentro"},
    {word:"ideal",correct:"ideal"},{word:"İkizler Burcu",correct:"Géminis"},{word:"ilkbahar",correct:"Primavera"},
    {word:"inek",correct:"vaca"},{word:"İngitlere",correct:"Inglaterra"},{word:"inşallah",correct:"ojalá"},
    {word:"insan",correct:"persona"},{word:"internete girmek",correct:"entrar en internet"},{word:"iş",correct:"trabajo"},
    {word:"iş yeri",correct:"lugar de trabajo"},{word:"işadamı",correct:"hombre de negocios"},{word:"ıspanak",correct:"espinaca"},
    {word:"İspanya",correct:"España"},{word:"istasyon",correct:"estación"},{word:"İtalya",correct:"Italia"},
    {word:"iyi",correct:"bien, bueno/a"},{word:"ızgara",correct:"parrilla"},{word:"izlemek",correct:"ver / mirar"},
    {word:"Japonya",correct:"Japón"},{word:"jeton",correct:"ficha"},{word:"jilet",correct:"cuchilla"},
    {word:"kaç",correct:"cuánto/a, cuántos/as"},{word:"kaçıncı",correct:"qué número"},{word:"kadın",correct:"mujer"},
    {word:"kafe",correct:"cafetería"},{word:"kahvaltı etmek",correct:"desayunar"},{word:"kahve",correct:"café"},
    {word:"kahverengi",correct:"marrón"},{word:"kahverengi saçlı",correct:"marrón (pelo)"},{word:"kalabalık",correct:"concurrido/a"},
    {word:"kalem",correct:"lápiz / bolígrafo"},{word:"kalkmak",correct:"levantarse"},{word:"kalmak",correct:"quedarse"},
    {word:"kalp",correct:"corazón"},{word:"kampus",correct:"campus"},{word:"kanepe",correct:"sofá"},
    {word:"kantin",correct:"cantina"},{word:"kapalı",correct:"cerrado/a"},{word:"kapatmak",correct:"cerrar"},
    {word:"kapı",correct:"puerta"},{word:"kasap",correct:"carnicero/a, carnicería"},{word:"Kasım",correct:"Noviembre"},
    {word:"kasiyer",correct:"cajero/a"},{word:"kat",correct:"piso, planta"},{word:"kebap",correct:"kebab"},
    {word:"kedi",correct:"gato"},{word:"kel",correct:"calvo/a"},{word:"kestane",correct:"castaño/a"},
    {word:"kibar",correct:"amable"},{word:"kilo",correct:"kilo"},{word:"kira",correct:"alquiler"},
    {word:"kırmızı",correct:"rojo"},{word:"kış",correct:"Invierno"},{word:"kısa saçlı",correct:"pelo corto"},
    {word:"kişi",correct:"persona"},{word:"kıskanç",correct:"celoso/a"},{word:"kitap",correct:"libro"},
    {word:"kitaplık",correct:"estantería"},{word:"kıvırcık saçlı",correct:"pelo rizado"},{word:"kız",correct:"chica / hija"},
    {word:"kızgın",correct:"enfadado/a"},{word:"kızıl saçlı",correct:"pelirrojo/a"},{word:"Koç Burcu",correct:"Aries"},
    {word:"kolay",correct:"fácil"},{word:"koltuk",correct:"sillón"},{word:"komik",correct:"gracioso/a"},
    {word:"konser",correct:"concierto"},{word:"kontrol etmek",correct:"revisar"},{word:"konuşkan",correct:"hablador/a"},
    {word:"konuşmak",correct:"hablar"},{word:"köpek",correct:"perro"},{word:"Kore",correct:"Corea"},
    {word:"korkmak",correct:"tener miedo"},{word:"korkmuş",correct:"asustado/a"},{word:"koşmak",correct:"correr"},
    {word:"kötü",correct:"malo"},{word:"Kova Burcu",correct:"Acuario"},{word:"köy",correct:"pueblo"},
    {word:"koymak",correct:"poner"},{word:"koyu",correct:"oscuro/a"},{word:"kuaför",correct:"peluquero/a"},
    {word:"kullanmak",correct:"usar"},{word:"kulüp",correct:"club"},{word:"kumral",correct:"castaño/a , marrón"},
    {word:"kuş",correct:"pájaro"},{word:"kutu",correct:"caja"},{word:"kütüphane",correct:"biblioteca"},
    {word:"kuyumcu",correct:"joyero/a, joyería"},{word:"lale",correct:"tulipán"},{word:"lamba",correct:"lámpara"},
    {word:"limon",correct:"limón"},{word:"litre",correct:"litro"},{word:"lokanta",correct:"restaurante"},
    {word:"maç",correct:"partido"},{word:"mağaza",correct:"tienda"},{word:"mahalle",correct:"barrio"},
    {word:"makas",correct:"tijeras"},{word:"manav",correct:"frutero/a, frutería"},{word:"market",correct:"mercado"},
    {word:"Mart",correct:"Marzo"},{word:"masa",correct:"mesa"},{word:"mavi",correct:"azul"},
    {word:"Mayıs",correct:"Mayo"},{word:"memur",correct:"funcionario/a"},{word:"merdiven",correct:"escalera"},
    {word:"Merhaba",correct:"Hola"},{word:"meşgul",correct:"ocupado/a"},{word:"metro",correct:"metro"},
    {word:"mevsimler",correct:"estaciones del año"},{word:"millet",correct:"nación"},{word:"misal",correct:"ejemplo"},
    {word:"mor",correct:"morado"},{word:"mp3 çalar",correct:"reproductor mp3"},{word:"mühendis",correct:"ingeniero/a"},
    {word:"müsait",correct:"disponible"},{word:"mutfak",correct:"cocina"},{word:"mutlu",correct:"feliz"},
    {word:"mutsuz",correct:"infeliz / triste"},{word:"nar",correct:"granada (fruta)"},{word:"nefes",correct:"respiración"},
    {word:"nefret etmek",correct:"odiar"},{word:"nerede",correct:"dónde"},{word:"nesne",correct:"objeto"},
    {word:"niçin",correct:"por qué"},{word:"Nijerya",correct:"Nigeria"},{word:"Nisan",correct:"Abril"},
    {word:"normal",correct:"normal"},{word:"numara",correct:"número"},{word:"ocak",correct:"enero / fogón"},
    {word:"oda",correct:"habitación"},{word:"ödemek",correct:"pagar"},{word:"ofis",correct:"oficina"},
    {word:"Oğlak Burcu",correct:"Capricornio"},{word:"öğleden sonra",correct:"por la tarde"},{word:"öğlen",correct:"mediodía"},
    {word:"öğrenci",correct:"estudiante"},{word:"öğrenmek",correct:"aprender"},{word:"öğretmen",correct:"profesor/a"},
    {word:"okumak",correct:"leer"},{word:"olmak",correct:"ser / estar"},{word:"önemli",correct:"importante"},
    {word:"önemsiz",correct:"sin importancia"},{word:"opera",correct:"ópera"},{word:"orada",correct:"allí"},
    {word:"ördek",correct:"pato"},{word:"orman",correct:"bosque"},{word:"otel",correct:"hotel"},
    {word:"otobüs",correct:"autobús"},{word:"oturmak",correct:"sentarse / vivir"},{word:"oynamak",correct:"jugar"},
    {word:"özlemek",correct:"extrañar / echar de menos"},{word:"Özür dilerim",correct:"Lo siento"},{word:"pahalı",correct:"caro/a"},
    {word:"paket",correct:"paquete"},{word:"para",correct:"dinero"},{word:"para çekmek",correct:"sacar dinero"},
    {word:"pardösü",correct:"abrigo"},{word:"park",correct:"parque"},{word:"pastane",correct:"pastelería"},
    {word:"patates",correct:"patata"},{word:"Pazar",correct:"Domingo"},{word:"Pazartesi",correct:"Lunes"},
    {word:"pembe",correct:"rosa"},{word:"pencere",correct:"ventana"},{word:"Perşembe",correct:"Jueves"},
    {word:"petrol",correct:"petróleo"},{word:"pijama",correct:"pijama"},{word:"pişirmek",correct:"cocinar"},
    {word:"piyano",correct:"piano"},{word:"polis",correct:"policía"},{word:"portakal",correct:"naranja"},
    {word:"postacı",correct:"cartero/a"},{word:"projektör",correct:"proyector"},{word:"psikolog",correct:"psicólogo/a"},
    {word:"radyo",correct:"radio"},{word:"rengarenk",correct:"multicolor / de mil colores"},{word:"renk",correct:"color"},
    {word:"renkli",correct:"colorido/a"},{word:"resepsiyonist",correct:"recepcionista"},{word:"resim",correct:"cuadro / dibujo"},
    {word:"restoran",correct:"restaurante"},{word:"Rica ederim",correct:"De nada"},{word:"rol",correct:"papel / rol"},
    {word:"roman",correct:"novela"},{word:"Rusya",correct:"Rusia"},{word:"saat",correct:"reloj / hora"},
    {word:"sabah",correct:"mañana"},{word:"sabahları",correct:"por las mañanas"},{word:"saç",correct:"cabello"},
    {word:"sağlıklı",correct:"saludable"},{word:"sakin",correct:"tranquilo/a"},{word:"Salı",correct:"Martes"},
    {word:"salon",correct:"salón"},{word:"sandalye",correct:"silla"},{word:"sanmak",correct:"creer / suponer"},
    {word:"sari",correct:"amarillo"},{word:"sarışın",correct:"rubio/a"},{word:"şarkı",correct:"canción"},
    {word:"şarkıcı",correct:"cantante"},{word:"sayı",correct:"número"},{word:"sefer",correct:"vez / viaje"},
    {word:"şehir",correct:"ciudad"},{word:"sehpa",correct:"mesa de café"},{word:"sekreter",correct:"secretario/a"},
    {word:"sembol",correct:"símbolo"},{word:"şemsiye",correct:"paraguas"},{word:"semt",correct:"barrio"},
    {word:"sergi",correct:"exposición"},{word:"sessiz",correct:"silencioso"},{word:"sevmek",correct:"amar / gustar"},
    {word:"seyahat",correct:"viaje"},{word:"sıfat",correct:"adjetivo"},{word:"şiir",correct:"poema"},
    {word:"sıkılmak",correct:"aburrirse"},{word:"silgi",correct:"borrador"},{word:"şimdi",correct:"ahora"},
    {word:"sinirli",correct:"enfadado/a, nervioso/a"},{word:"sıra",correct:"fila / pupitre"},{word:"şişe",correct:"botella"},
    {word:"şişman",correct:"gordo/a"},{word:"site",correct:"sitio web"},{word:"siyah",correct:"negro"},
    {word:"siyah saçlı",correct:"pelo negro"},{word:"sohbet etmek",correct:"charlar"},{word:"sokak",correct:"calle"},
    {word:"sonbahar",correct:"Otoño"},{word:"sormak",correct:"preguntar"},{word:"soru",correct:"pregunta"},
    {word:"sorun",correct:"problema"},{word:"sosyal",correct:"social"},{word:"soyadı",correct:"apellido"},
    {word:"söylemek",correct:"decir"},{word:"sözlük",correct:"diccionario"},{word:"spor yapmak",correct:"hacer deporte"},
    {word:"stres atmak",correct:"desestresarse"},{word:"Şubat",correct:"Febrero"},{word:"Suriye",correct:"Siria"},
    {word:"tabak",correct:"plato"},{word:"tahta",correct:"madera / pizarra"},{word:"Tamam",correct:"Vale / De acuerdo"},
    {word:"tanımak",correct:"conocer"},{word:"tanışmak",correct:"conocerse"},{word:"tarih",correct:"fecha / historia"},
    {word:"tatil",correct:"vacaciones"},{word:"tavuk",correct:"pollo"},{word:"Tebrikler",correct:"Felicidades"},
    {word:"tehlikeli",correct:"peligroso/a"},{word:"tekrar etmek",correct:"repetir"},{word:"telefon",correct:"teléfono"},
    {word:"tembel",correct:"perezoso/a"},{word:"temiz",correct:"limpio"},{word:"temizlemek",correct:"limpiar"},
    {word:"Temmuz",correct:"Julio"},{word:"Terazi Burcu",correct:"Libra"},{word:"terlik",correct:"zapatillas"},
    {word:"tezgâhtar",correct:"dependiente/a"},{word:"tırmanmak",correct:"escalar"},{word:"tiyatro",correct:"teatro"},
    {word:"top",correct:"pelota"},{word:"tur",correct:"tour"},{word:"tür",correct:"tipo"},
    {word:"turist",correct:"turista"},{word:"Türkiye",correct:"Turquía"},{word:"turuncu",correct:"naranja"},
    {word:"tuzlu",correct:"salado/a"},{word:"uçak",correct:"avión"},{word:"uçurtma",correct:"cometa"},
    {word:"ucuz",correct:"barato/a"},{word:"üst",correct:"arriba / sobre"},{word:"uygun",correct:"adecuado/a"},
    {word:"uyumak",correct:"dormir"},{word:"uzak",correct:"lejos"},{word:"uzanmak",correct:"tumbarse"},
    {word:"üzüm",correct:"uva"},{word:"uzun saçlı",correct:"pelo largo"},{word:"vagon",correct:"vagón"},
    {word:"vapur",correct:"barco / ferry"},{word:"var",correct:"hay"},{word:"varmak",correct:"llegar"},
    {word:"vazo",correct:"jarrón"},{word:"vermek",correct:"dar"},{word:"yabancı",correct:"extranjero/a"},
    {word:"yakın",correct:"cerca"},{word:"yakışıklı",correct:"guapo"},{word:"yalan",correct:"mentira"},
    {word:"yanlış",correct:"equivocado"},{word:"yapmak",correct:"hacer"},{word:"yardım etmek",correct:"ayudar"},
    {word:"yardım istemek",correct:"pedir ayuda"},{word:"yaş",correct:"edad"},{word:"yaşamak",correct:"vivir"},
    {word:"yaşlı",correct:"anciano/a"},{word:"yastık",correct:"almohada"},{word:"yatmak",correct:"acostarse"},
    {word:"yavaş",correct:"lento/a"},{word:"Yay Burcu",correct:"Sagitario"},{word:"yaz",correct:"Verano"},
    {word:"yazı tahtası",correct:"pizarra"},{word:"yazmak",correct:"escribir"},{word:"yemek",correct:"comer"},
    {word:"yemekhane",correct:"comedor (escolar / de empresa)"},{word:"Yengeç Burcu",correct:"Cáncer"},
    {word:"yeni",correct:"nuevo/a"},{word:"yeni yıl",correct:"año nuevo"},{word:"yer",correct:"lugar"},
    {word:"yeşil",correct:"verde"},{word:"yıl",correct:"año"},{word:"yıldız",correct:"estrella"},
    {word:"yiyecek",correct:"alimento"},{word:"yoğun",correct:"intenso / ocupado"},{word:"yok",correct:"no hay"},
    {word:"yolcu",correct:"pasajero/a"},{word:"yorgun",correct:"cansado/a"},{word:"yorulmak",correct:"cansarse"},
    {word:"yorum",correct:"comentario"},{word:"yurt",correct:"residencia (estudiantil) / patria"},
    {word:"yürümek",correct:"caminar"},{word:"yüzmek",correct:"nadar"},{word:"yüzük",correct:"anillo"},
    {word:"zaman",correct:"tiempo"},{word:"zamir",correct:"pronombre"},{word:"zayıf",correct:"delgado/a, débil"},
    {word:"zengin",correct:"rico/a"},{word:"zeytin",correct:"aceituna"},{word:"zürafa",correct:"jirafa"},
    {word:"doktor",correct:"médico/a"},{word:"muhasebeci",correct:"contable"},{word:"aşçı",correct:"cocinero/a"},
    {word:"mimar",correct:"arquitecto/a"},{word:"veteriner",correct:"veterinario/a"},{word:"diş hekimi",correct:"dentista"},
    {word:"gazeteci",correct:"periodista"},{word:"şoför",correct:"conductor/a"},{word:"pilot",correct:"piloto/a"},
    {word:"işçi",correct:"trabajador/a"},{word:"elektrikçi",correct:"electricista"},{word:"yazar",correct:"escritor/a"},
    {word:"çiftçi",correct:"agricultor/a"},{word:"işletmeci",correct:"empresario/a"},{word:"satış temsilcisi",correct:"vendedor/a"},
    {word:"bilim insanı",correct:"científico/a"},{word:"cep telefonu",correct:"teléfono móvil"},{word:"cüzdan",correct:"cartera"},
    {word:"Kurşun kalem",correct:"lápiz"},{word:"uzaktan kumanda",correct:"control remoto, mando"},
    {word:"diş fırçası",correct:"cepillo de dientes"},{word:"kredi kartı",correct:"tarjeta de crédito"},
    {word:"güneş gözlüğü",correct:"gafas de sol"},{word:"telefon şarjı",correct:"cargador del teléfono"},
    {word:"fincan",correct:"taza"},{word:"kupa",correct:"taza / trofeo"},{word:"alışveriş çantası",correct:"bolsa de la compra"},
    {word:"bıçak",correct:"cuchillo"},{word:"su şişesi",correct:"botella de agua"}
];

// 2. VARIABLES DE ESTADO
let pool = []; 
let activeQueue = []; 
let current = null;
let locked = false;
let gameMode = 'tr-es'; 
let currentRoundMode = 'tr-es'; 

const BLOCK_SIZE = 25; 
const MASTERY_THRESHOLD = 5;
let score = 0;
let progress = {};

// 3. GENERADOR DE NÚMEROS
function getRandomNumberWord() {
    const units = ["", "bir", "iki", "üç", "dört", "beş", "alt", "yedi", "sekiz", "dokuz"];
    const tens = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];
    const specials = [{ n: 100, tr: "yüz" }, { n: 1000, tr: "bin" }, { n: 1000000, tr: "bir milyon" }];
    if (Math.random() < 0.2) {
        let s = specials[Math.floor(Math.random() * specials.length)];
        return { word: s.tr, correct: s.n.toLocaleString() };
    }
    let n = Math.floor(Math.random() * 100);
    if (n === 0) return { word: "sıfır", correct: "0" };
    let ten = Math.floor(n / 10);
    let unit = n % 10;
    let tr = (tens[ten] + " " + units[unit]).trim();
    return { word: tr, correct: n.toString() };
}

// 4. FUNCIONES DE INTERFAZ
function showMenu() {
    // Solo alternamos visibilidad sin resetear los estilos de los botones de modo
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('start-screen').style.display = 'flex';
}

function setMode(mode, e) {
    gameMode = mode;
    
    // Reset visual de todos los botones
    document.querySelectorAll('#mode-selector .primary-btn').forEach(btn => {
        btn.style.opacity = "0.5";
        btn.style.transform = "scale(0.95)";
        btn.style.border = "none";
    });

    // Resaltar el botón seleccionado (si viene de un evento real)
    if (e && e.currentTarget) {
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.border = "2px solid white";
    }

    // Cargar datos del modo seleccionado
    score = parseInt(localStorage.getItem(`turco_score_${mode}`)) || 0;
    progress = JSON.parse(localStorage.getItem(`turco_progress_${mode}`)) || {};
    
    // Mostrar/Ocultar botón de continuar
    const resumeBtn = document.getElementById('resume-button');
    if (resumeBtn) {
        resumeBtn.style.display = (score > 0 || Object.keys(progress).length > 0) ? 'block' : 'none';
    }
}

function resetAndStart() {
    localStorage.removeItem(`turco_score_${gameMode}`);
    localStorage.removeItem(`turco_progress_${gameMode}`);
    score = 0;
    progress = {};
    startGame();
}

function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'flex';
    initBlocks();
    updateUI();
    loadQuestion();
}

// 5. LÓGICA DE JUEGO
function initBlocks() {
    let available = allWords.filter(item => (progress[item.word] || 0) < MASTERY_THRESHOLD);
    available.sort(() => Math.random() - 0.5);
    activeQueue = available.slice(0, BLOCK_SIZE);
    pool = available.slice(BLOCK_SIZE);
}

function updateUI() {
    let total = allWords.length;
    let percent = Math.round((score / total) * 100);
    const scoreEl = document.getElementById("score");
    const percentEl = document.getElementById("percent");
    if(scoreEl) scoreEl.textContent = score + " tamamlanan";
    if(percentEl) percentEl.textContent = "%" + percent;
}

function loadQuestion() {
    if (activeQueue.length === 0 && pool.length === 0) {
        document.getElementById("word").textContent = "TEBRİKLER! 🎉";
        document.getElementById("options").innerHTML = "";
        return;
    }
    locked = false;
    let isNumber = Math.random() < 0.10;
    current = isNumber ? getRandomNumberWord() : activeQueue[Math.floor(Math.random() * activeQueue.length)];
    
    if (gameMode === 'mixed') { 
        currentRoundMode = Math.random() > 0.5 ? 'tr-es' : 'es-tr'; 
    } else { 
        currentRoundMode = gameMode; 
    }

    const wordElement = document.getElementById("word");
    const optionsContainer = document.getElementById("options");
    const dotsContainer = document.getElementById("dots");

    let correctText = (currentRoundMode === 'tr-es') ? current.correct : current.word;
    wordElement.textContent = (currentRoundMode === 'tr-es') ? current.word : current.correct;
    
    wordElement.classList.remove("word-mastered"); 
    optionsContainer.classList.remove("has-mastered");

    if (isNumber) { 
        dotsContainer.style.visibility = "hidden"; 
    } else { 
        dotsContainer.style.visibility = "visible"; 
        renderDots(current.word); 
    }

    let opts = new Set([correctText]);
    while(opts.size < 4) {
        let randomItem = allWords[Math.floor(Math.random() * allWords.length)];
        let randomOpt = (currentRoundMode === 'tr-es') ? randomItem.correct : randomItem.word;
        opts.add(randomOpt);
    }

    optionsContainer.innerHTML = "";
    [...opts].sort(() => Math.random() - 0.5).forEach(opt => {
        let btn = document.createElement("button");
        btn.className = "option";
        btn.textContent = opt;
        btn.onclick = (e) => handleAnswer(opt, correctText, e.target, isNumber);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selected, correct, btn, isNumber) {
    if (locked) return;
    locked = true;
    const optionsContainer = document.getElementById("options");
    let masteredThisTurn = false;

    document.querySelectorAll(".option").forEach(b => { 
        if (b.textContent === correct) b.classList.add("correct"); 
    });

    if (selected === correct) {
        if (!isNumber) {
            const wordKey = current.word;
            progress[wordKey] = (progress[wordKey] || 0) + 1;
            if (progress[wordKey] >= MASTERY_THRESHOLD) {
                masteredThisTurn = true;
                score++;
                document.getElementById("word").classList.add("word-mastered");
                optionsContainer.classList.add("has-mastered");
            }
        }
    } else {
        btn.classList.add("wrong");
        if (!isNumber) {
            const wordKey = current.word;
            if(progress[wordKey] > 0) progress[wordKey] -= 1;
        }
    }

    localStorage.setItem(`turco_score_${gameMode}`, score);
    localStorage.setItem(`turco_progress_${gameMode}`, JSON.stringify(progress));
    updateUI();

    if (!isNumber) renderDots(current.word, masteredThisTurn);

    setTimeout(() => {
        if (masteredThisTurn) {
            activeQueue = activeQueue.filter(x => x.word !== current.word);
            if (pool.length > 0) activeQueue.push(pool.shift());
        }
        loadQuestion();
    }, masteredThisTurn ? 1200 : 700);
}

function renderDots(wordKey, mastered = false) {
    let container = document.getElementById("dots");
    if (!container) return;
    container.innerHTML = "";
    let val = progress[wordKey] || 0;
    for (let i = 0; i < MASTERY_THRESHOLD; i++) {
        let d = document.createElement("div");
        d.className = "dot" + (i < val ? " active" : "") + (mastered ? " mastered" : "");
        container.appendChild(d);
    }
}

// Inicialización corregida para que el menú principal sea consistente
window.onload = () => {
    const firstBtn = document.querySelector('#mode-selector button');
    if(firstBtn) {
        setMode('tr-es', { currentTarget: firstBtn });
    }
}
