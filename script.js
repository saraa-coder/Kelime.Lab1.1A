/**
 * KELIME LAB 1.1 - LISTA OFICIAL COMPLETA
 */

const allWords = [
    {word:"aç",correct:"hambriento/a"},{word:"açık",correct:"abierto / claro (color)"},{word:"açmak",correct:"abrir"},
    {word:"ad (isim)",correct:"nombre"},{word:"adres",correct:"dirección"},{word:"Affedersiniz",correct:"Perdone"},
    {word:"Afiyet olsun",correct:"Buen provecho"},{word:"ağaç",correct:"árbol"},{word:"Ağustos",correct:"agosto"},
    {word:"Akrep Burcu",correct:"Escorpio"},{word:"akşam",correct:"tarde / noche"},{word:"alışveriş",correct:"compras"},
    {word:"alkol",correct:"alcohol"},{word:"Almanya",correct:"Alemania"},{word:"alt",correct:"debajo"},
    {word:"anahtar",correct:"llave"},{word:"anlamak",correct:"entender"},{word:"anneler günü",correct:"día de la madre"},
    {word:"araba",correct:"coche"},{word:"Aralık",correct:"diciembre"},{word:"aramak",correct:"buscar / llamar"},
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
    {word:"çarpı",correct:"por (multiplicar)"},{word:"Çarşamba",correct:"miércoles"},{word:"çarşı",correct:"mercado"},
    {word:"çay",correct:"té"},{word:"çenesiz",correct:"muy hablador/a"},{word:"cesur",correct:"valiente"},
    {word:"cetvel",correct:"regla"},{word:"cevap",correct:"respuesta"},{word:"ceviz",correct:"nuez"},
    {word:"çiçek",correct:"flor"},{word:"ciddi",correct:"serio/a"},{word:"çıkmak",correct:"salir"},
    {word:"Çin",correct:"China"},{word:"çirkin",correct:"feo/a"},{word:"çocuk",correct:"niño/a"},
    {word:"çok",correct:"muy, mucho/a, muchos/as"},{word:"Çok yaşa",correct:"Salud (estornudo)"},
    {word:"çöp kutusu",correct:"papelera"},{word:"Cuma",correct:"viernes"},{word:"Cumartesi",correct:"sábado"},
    {word:"çünkü",correct:"porque"},{word:"dağınık",correct:"desordenado/a"},{word:"dalgalı saçlı",correct:"pelo ondulado"},
    {word:"dans",correct:"danza"},{word:"dar",correct:"estrecho/a"},{word:"defter",correct:"cuaderno"},
    {word:"değişik",correct:"diferente"},{word:"demek",correct:"decir"},{word:"deniz",correct:"mar"},
    {word:"dergi",correct:"revista"},{word:"ders",correct:"clase / lección"},{word:"dikkatli",correct:"cuidadoso/a"},
    {word:"dikkatsiz",correct:"descuidado/a"},{word:"dinlemek",correct:"escuchar"},{word:"dinlenmek",correct:"descansar"},
    {word:"dışarı",correct:"afuera"},{word:"dizi",correct:"serie"},{word:"doğum günü",correct:"cumpleaños"},
    {word:"doğum tarihi",correct:"fecha nacimiento"},{word:"dolap",correct:"armario"},{word:"dolaşmak",correct:"pasear"},
    {word:"dolu",correct:"lleno/a"},{word:"domates",correct:"tomate"},{word:"dönmek",correct:"volver"},
    {word:"dosya",correct:"archivo"},{word:"düğün",correct:"boda (celebración)"},{word:"durak",correct:"parada"},
    {word:"durmak",correct:"parar"},{word:"duş almak",correct:"ducharse"},{word:"duvar",correct:"pared"},
    {word:"düz saçlı",correct:"pelo liso"},{word:"düzenli",correct:"ordenado/a"},{word:"eczacı",correct:"farmacéutico/a"},
    {word:"eczane",correct:"farmacia"},{word:"eğlenceli",correct:"divertido/a"},{word:"Ekim",correct:"octubre"},
    {word:"ekmek",correct:"pan"},{word:"ekonomi",correct:"economía"},{word:"eksi",correct:"menos"},{word:"derece",correct:"grado (°C)"},
    {word:"elbise",correct:"vestido / ropa"},{word:"elma",correct:"manzana"},{word:"emekli",correct:"jubilado/a"},
    {word:"erkek",correct:"hombre"},{word:"erken",correct:"temprano"},{word:"eş",correct:"esposo/a, cónyuge"},
    {word:"eski",correct:"antiguo/a"},{word:"esmer",correct:"moreno/a"},{word:"etmek",correct:"hacer (auxiliar)"},
    {word:"ev",correct:"casa"},{word:"evli",correct:"casado/a"},{word:"Eylül",correct:"septiembre"},
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
    {word:"Haziran",correct:"junio"},{word:"hazırlamak",correct:"preparar"},{word:"hazırlanmak",correct:"prepararse"},
    {word:"hediye",correct:"regalo"},{word:"hemşire",correct:"enfermero/a"},{word:"her",correct:"cada"},
    {word:"her zaman",correct:"siempre"},{word:"heyecanlı",correct:"emocionado/a"},{word:"hiç",correct:"nada / nunca"},
    {word:"hiçbir zaman",correct:"nunca"},{word:"hızlı",correct:"rápido/a"},{word:"Hoş bulduk",correct:"Respuesta a bienvenida"},
    {word:"Hoş geldin",correct:"Bienvenido/a"},{word:"Hoşça kal",correct:"Adiós (quien se va)"},{word:"hoşlanmak",correct:"gustar"},
    {word:"hukuk",correct:"derecho"},{word:"içecek",correct:"bebida"},{word:"içeri",correct:"adentro"},
    {word:"ideal",correct:"ideal"},{word:"İkizler Burcu",correct:"Géminis"},{word:"ilkbahar",correct:"primavera"},
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
    {word:"kapı",correct:"puerta"},{word:"kasap",correct:"carnicero/a, carnicería"},{word:"Kasım",correct:"noviembre"},
    {word:"kasiyer",correct:"cajero/a"},{word:"kat",correct:"piso, planta"},{word:"kebap",correct:"kebab"},
    {word:"kedi",correct:"gato"},{word:"kel",correct:"calvo/a"},{word:"kestane",correct:"castaña"},
    {word:"kibar",correct:"amable"},{word:"kilo",correct:"kilo"},{word:"kira",correct:"alquiler"},
    {word:"kırmızı",correct:"rojo"},{word:"kış",correct:"invierno"},{word:"kısa saçlı",correct:"pelo corto"},
    {word:"kişi",correct:"persona"},{word:"kıskanç",correct:"celoso/a"},{word:"kitap",correct:"libro"},
    {word:"kitaplık",correct:"estantería"},{word:"kıvırcık saçlı",correct:"pelo rizado"},{word:"kız",correct:"chica / hija"},
    {word:"kızgın",correct:"enfadado/a"},{word:"kızıl saçlı",correct:"pelirrojo/a"},{word:"Koç Burcu",correct:"Aries"},
    {word:"kolay",correct:"fácil"},{word:"koltuk",correct:"sillón"},{word:"komik",correct:"gracioso/a"},
    {word:"konser",correct:"concierto"},{word:"kontrol etmek",correct:"revisar"},{word:"konuşkan",correct:"hablador/a"},
    {word:"konuşmak",correct:"hablar"},{word:"köpek",correct:"perro"},{word:"Kore",correct:"Corea"},
    {word:"korkmak",correct:"tener miedo"},{word:"korkmuş",correct:"asustado/a"},{word:"koşmak",correct:"correr"},
    {word:"kötü",correct:"malo"},{word:"Kova Burcu",correct:"Acuario"},{word:"köy",correct:"pueblo"},
    {word:"koymak",correct:"poner"},{word:"koyu",correct:"oscuro/a"},{word:"kuaför",correct:"peluquero/a"},
    {word:"kullanmak",correct:"usar"},{word:"kulüp",correct:"club"},{word:"kumral",correct:"castaño/a"},
    {word:"kuş",correct:"pájaro"},{word:"kutu",correct:"caja"},{word:"kütüphane",correct:"biblioteca"},
    {word:"kuyumcu",correct:"joyero/a, joyería"},{word:"lale",correct:"tulipán"},{word:"lamba",correct:"lámpara"},
    {word:"limon",correct:"limón"},{word:"litre",correct:"litro"},{word:"lokanta",correct:"restaurante"},
    {word:"maç",correct:"partido"},{word:"mağaza",correct:"tienda"},{word:"mahalle",correct:"barrio"},
    {word:"makas",correct:"tijeras"},{word:"manav",correct:"frutero/a, frutería"},{word:"market",correct:"mercado"},
    {word:"Mart",correct:"marzo"},{word:"masa",correct:"mesa"},{word:"mavi",correct:"azul"},
    {word:"Mayıs",correct:"mayo"},{word:"memur",correct:"funcionario/a"},{word:"merdiven",correct:"escalera"},
    {word:"Merhaba",correct:"Hola"},{word:"meşgul",correct:"ocupado/a"},{word:"metro",correct:"metro"},
    {word:"mevsimler",correct:"estaciones del año"},{word:"millet",correct:"nación"},{word:"misal",correct:"ejemplo"},
    {word:"mor",correct:"morado"},{word:"müzik çalar",correct:"reproductor de música"},{word:"mühendis",correct:"ingeniero/a"},
    {word:"müsait",correct:"disponible"},{word:"mutfak",correct:"cocina"},{word:"mutlu",correct:"feliz"},
    {word:"mutsuz",correct:"infeliz / triste"},{word:"nar",correct:"granada (fruta)"},{word:"nefes",correct:"respiración"},
    {word:"nefret etmek",correct:"odiar"},{word:"nerede",correct:"dónde"},{word:"nesne",correct:"objeto"},
    {word:"niçin",correct:"por qué"},{word:"Nijerya",correct:"Nigeria"},{word:"Nisan",correct:"abril"},
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
    {word:"patates",correct:"patata"},{word:"Pazar",correct:"domingo"},{word:"Pazartesi",correct:"lunes"},
    {word:"pembe",correct:"rosa"},{word:"pencere",correct:"ventana"},{word:"Perşembe",correct:"jueves"},
    {word:"petrol",correct:"petróleo"},{word:"pijama",correct:"pijama"},{word:"pişirmek",correct:"cocinar"},
    {word:"piyano",correct:"piano"},{word:"polis",correct:"policía"},{word:"portakal",correct:"naranja"},
    {word:"postacı",correct:"cartero/a"},{word:"projektör",correct:"proyector"},{word:"psikolog",correct:"psicólogo/a"},
    {word:"radyo",correct:"radio"},{word:"rengarenk",correct:"multicolor / de mil colores"},{word:"renk",correct:"color"},
    {word:"renkli",correct:"colorido/a"},{word:"resepsiyonist",correct:"recepcionista"},{word:"resim",correct:"cuadro / dibujo"},
    {word:"restoran",correct:"restaurante"},{word:"rica ederim",correct:"de nada"},{word:"rol",correct:"papel / rol"},
    {word:"roman",correct:"novela"},{word:"Rusya",correct:"Rusia"},{word:"saat",correct:"reloj / hora"},
    {word:"sabah",correct:"mañana"},{word:"sabahları",correct:"por las mañanas"},{word:"saç",correct:"cabello"},
    {word:"sağlıklı",correct:"saludable"},{word:"sakin",correct:"tranquilo/a"},{word:"Salı",correct:"martes"},
    {word:"salon",correct:"salón"},{word:"sandalye",correct:"silla"},{word:"sanmak",correct:"creer / suponer"},
    {word:"sarı",correct:"amarillo"},{word:"sarışın",correct:"rubio/a"},{word:"şarkı",correct:"canción"},
    {word:"şarkıcı",correct:"cantante"},{word:"sayı",correct:"número"},{word:"sefer",correct:"vez / viaje"},
    {word:"şehir",correct:"ciudad"},{word:"sehpa",correct:"mesa de café"},{word:"sekreter",correct:"secretario/a"},
    {word:"sembol",correct:"símbolo"},{word:"şemsiye",correct:"paraguas"},{word:"semt",correct:"barrio"},
    {word:"sergi",correct:"exposición"},{word:"sessiz",correct:"silencioso"},{word:"sevmek",correct:"amar / gustar"},
    {word:"seyahat",correct:"viaje"},{word:"sıfat",correct:"adjetivo"},{word:"şiir",correct:"poema"},
    {word:"sıkılmak",correct:"aburrirse"},{word:"silgi",correct:"borrador"},{word:"şimdi",correct:"ahora"},
    {word:"sinirli",correct:"enfadado/a, nervioso/a"},{word:"sıra",correct:"fila / pupitre"},{word:"şişe",correct:"botella"},
    {word:"şişman",correct:"gordo/a"},{word:"site",correct:"urbanización"},{word:"siyah",correct:"negro"},
    {word:"siyah saçlı",correct:"pelo negro"},{word:"sohbet etmek",correct:"charlar"},{word:"sokak",correct:"calle"},
    {word:"sonbahar",correct:"otoño"},{word:"sormak",correct:"preguntar"},{word:"soru",correct:"pregunta"},
    {word:"sorun",correct:"problema"},{word:"sosyal",correct:"social"},{word:"soyadı",correct:"apellido"},
    {word:"söylemek",correct:"decir"},{word:"sözlük",correct:"diccionario"},{word:"spor yapmak",correct:"hacer deporte"},
    {word:"stres atmak",correct:"desestresarse"},{word:"Şubat",correct:"febrero"},{word:"Suriye",correct:"Siria"},
    {word:"tabak",correct:"plato"},{word:"tahta",correct:"madera / pizarra"},{word:"Tamam",correct:"Vale / De acuerdo"},
    {word:"tanımak",correct:"conocer"},{word:"tanışmak",correct:"conocerse"},{word:"tarih",correct:"fecha / historia"},
    {word:"tatil",correct:"vacaciones"},{word:"tavuk",correct:"pollo"},{word:"Tebrikler",correct:"Felicidades"},
    {word:"tehlikeli",correct:"peligroso/a"},{word:"tekrar etmek",correct:"repetir"},{word:"telefon",correct:"teléfono"},
    {word:"tembel",correct:"perezoso/a"},{word:"temiz",correct:"limpio"},{word:"temizlemek",correct:"limpiar"},
    {word:"Temmuz",correct:"julio"},{word:"Terazi Burcu",correct:"Libra"},{word:"terlik",correct:"zapatillas"},
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
    {word:"yavaş",correct:"lento/a"},{word:"Yay Burcu",correct:"Sagitario"},{word:"yaz",correct:"verano"},
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
    {word:"nikah",correct:"boda (ceremonia legal)"},{word:"karşılaşma",correct:"encuentro"},{word:"sene",correct:"año"},
    {word:"şamdan",correct:"candelabro"},{word:"takvim",correct:"calendario"},{word:"üzüm",correct:"uva"},{word:"valiz",correct:"maleta"},
    {word:"ünlü",correct:"vocal (Gram.) / famoso/a"},{word:"ünsüz",correct:"consonante (Gram.)"},
    {word:"keman",correct:"violín"},{word:"nargile",correct:"cachimba"},{word:"peynir",correct:"queso"},
    {word:"çaydanlık",correct:"tetera turca"},{word:"gemi",correct:"barco"},{word:"ışık",correct:"luz"},
    {word:"Yunanistan",correct:"Grecia"},{word:"demlik",correct:"tetera"},{word:"bisiklet",correct:"bicicleta"},
    {word:"sıralamak",correct:"ordenar, enumerar"},{word:"selamlaşma",correct:"saludo"},{word:"ayrılma",correct:"separación, despedida"},
    {word:"ne demek",correct:"de nada"},{word:"karşılaşma",correct:"encuentro"},{word:"bir şey değil",correct:"de nada"},{word:"rica etmek",correct:"pedir"},{word:"fincan",correct:"taza"},{word:"kupa",correct:"taza / trofeo"},{word:"alışveriş çantası",correct:"bolsa de la compra"},
    {word:"bıçak",correct:"cuchillo"},{word:"su şişesi",correct:"botella de agua"},{word:"iyi uykular",correct:"que duermas bien"},{word:"tatlı rüyalar",correct:"dulces sueños"},{word:"rüya",correct:"sueño (CAT somni)"},{word:"uyku",correct:"sueño (CAT son)"}

];

// VARIABLES DE ESTADO
let gameMode = 'tr-es';
let currentRoundMode = 'tr-es';
let score = 0;
let progress = {};
let current = null;
let activeQueue = [];
let locked = false;
let isMuted = false;
let lastWordKey = null; // Para evitar repeticiones seguidas

const MASTERY_THRESHOLD = 5;

// --- AUDIO Y BOTÓN MUTE ---
function setupMuteButton() {
    if (document.getElementById('mute-btn')) return;
    const btn = document.createElement('button');
    btn.id = 'mute-btn';
    btn.innerHTML = '🔊';
    btn.style.cssText = `position:fixed;top:20px;right:20px;z-index:9999;width:50px;height:50px;border-radius:50%;border:2px solid white;background:rgba(0,0,0,0.3);color:white;font-size:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;`;
    btn.onclick = (e) => {
        e.stopPropagation();
        isMuted = !isMuted;
        btn.innerHTML = isMuted ? '🔇' : '🔊';
        if (isMuted) window.speechSynthesis.cancel();
    };
    document.body.appendChild(btn);
}

function hablarTurco(texto) {
    if (isMuted) return;
    window.speechSynthesis.cancel();
    const mensaje = new SpeechSynthesisUtterance(texto);
    mensaje.lang = 'tr-TR';
    mensaje.rate = 0.7;
    const voces = window.speechSynthesis.getVoices();
    const vozTurca = voces.find(v => v.lang.includes('tr')) || voces[0];
    if (vozTurca) mensaje.voice = vozTurca;
    window.speechSynthesis.speak(mensaje);
}

// --- INTERFAZ ---
function setMode(mode, event) {
    gameMode = mode;
    document.querySelectorAll('#mode-selector .primary-btn').forEach(btn => {
        btn.style.border = "none";
        btn.style.opacity = "0.6";
    });
    if (event && event.currentTarget) {
        event.currentTarget.style.border = "3px solid white";
        event.currentTarget.style.opacity = "1";
    }
}

function resetAndStart() {
    score = 0;
    progress = {};
    // Añade esta línea para que el botón de continuar desaparezca al reiniciar
    document.getElementById('resume-button').style.display = 'none';
    startGame();
}
function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'flex';
    hablarTurco(""); 
    initQueue();
    updateStats();
    loadQuestion();
}

function showMenu() {
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
    
    // Esto es lo que falta:
    const resumeBtn = document.getElementById('resume-button');
    if (score > 0 || Object.keys(progress).length > 0) {
        resumeBtn.style.display = 'block';
    }
}

function updateStats() {
    const scoreEl = document.getElementById("score");
    const percentEl = document.getElementById("percent");
    if (scoreEl) scoreEl.textContent = score + " tamamlanan";
    if (percentEl) {
        let p = Math.round((score / allWords.length) * 100);
        percentEl.textContent = "%" + p;
    }
}

// --- LÓGICA ---
function initQueue() {
    // 1. Cogemos 23 palabras normales que no estén terminadas
    activeQueue = [...allWords]
        .filter(w => (progress[w.word] || 0) < MASTERY_THRESHOLD)
        .sort(() => Math.random() - 0.5)
        .slice(0, 23);
}

function loadQuestion() {
    if (activeQueue.length === 0) initQueue();
    locked = false;

// --- LÓGICA ANTI-REPETICIÓN ---
    let chosenWord;
    // Si faltan palabras para llegar a 25, sacamos un número aleatorio nuevo
    if (activeQueue.length < 25 && Math.random() < 0.05) {
        chosenWord = getRandomNumber();
    } else if (activeQueue.length > 1) {
        do {
            chosenWord = activeQueue[Math.floor(Math.random() * activeQueue.length)];
        } while (chosenWord.word === lastWordKey);
    } else {
        chosenWord = activeQueue[0] || getRandomNumber();
    }
    
    current = chosenWord;
    lastWordKey = current.word; 
    // ------------------------------

    if (gameMode === 'mixed') {
        currentRoundMode = Math.random() > 0.5 ? 'tr-es' : 'es-tr';
    } else {
        currentRoundMode = gameMode;
    }

    const wordEl = document.getElementById("word");
    const optionsEl = document.getElementById("options");

    // 1. LIMPIEZA
    wordEl.classList.remove("word-mastered");
    wordEl.style.color = ""; // Limpieza extra por seguridad

    wordEl.textContent = (currentRoundMode === 'tr-es') ? current.word : current.correct;
    
    // 2. ACTUALIZAR PUNTOS
    renderDots(current.word);

    if (currentRoundMode === 'tr-es') {
        setTimeout(() => {
            hablarTurco(current.word);
        }, 500);
    }

    // 3. GENERAR OPCIONES (Asegúrate de que esta parte siga aquí abajo)
    let correctText = (currentRoundMode === 'tr-es') ? current.correct : current.word;
    let opts = new Set([correctText]);
    while(opts.size < 4) {
        let r = allWords[Math.floor(Math.random() * allWords.length)];
        let candidate = (currentRoundMode === 'tr-es') ? r.correct : r.word;
        opts.add(candidate);
    }

    optionsEl.innerHTML = "";
    [...opts].sort(() => Math.random() - 0.5).forEach(opt => {
        let btn = document.createElement("button");
        btn.className = "option";
        btn.textContent = opt;
        btn.onclick = () => handleAnswer(opt, correctText);
        optionsEl.appendChild(btn);
    });
}

function handleAnswer(selected, correct) {
    if (locked) return;
    locked = true;
    if (currentRoundMode === 'es-tr') hablarTurco(current.word);
    
    const isCorrect = (selected === correct);
    const wordKey = current.word;
    const wordEl = document.getElementById("word");

    if (isCorrect) {
        progress[wordKey] = (progress[wordKey] || 0) + 1;
        
        // Si llega a 5, añadimos la clase que definimos en el CSS
        if (progress[wordKey] >= MASTERY_THRESHOLD) {
            score++;
            activeQueue = activeQueue.filter(w => w.word !== wordKey);
            let available = allWords.filter(w => (progress[w.word] || 0) < 5 && !activeQueue.some(aq => aq.word === w.word));
if (available.length > 0) activeQueue.push(available[Math.floor(Math.random() * available.length)]);
            wordEl.classList.add("word-mastered"); // <--- ESTO activa el amarillo
        }
    } else {
        if (progress[wordKey] > 0) progress[wordKey]--;
    }

    // Los botones se mantienen con sus colores normales (verde/rojo)
    document.querySelectorAll(".option").forEach(b => {
        if (b.textContent === correct) b.style.backgroundColor = "#10b981";
        if (b.textContent === selected && !isCorrect) b.style.backgroundColor = "#ef4444";
    });

    updateStats();
    renderDots(wordKey); // Actualiza los círculos
    setTimeout(loadQuestion, 1250);
}

function renderDots(wordKey) {
    const container = document.getElementById("dots");
    if (!container) return;
    container.innerHTML = "";
    
    let val = progress[wordKey] || 0;

    for (let i = 0; i < MASTERY_THRESHOLD; i++) {
        let d = document.createElement("div");
        d.className = "dot";
        
        if (i < val) {
            // Si el progreso es 5, usamos la clase amarilla, si no, la verde (active)
            if (val >= MASTERY_THRESHOLD) {
                d.classList.add("mastered");
            } else {
                d.classList.add("active");
            }
        }
        container.appendChild(d);
    }
}

window.onload = () => {
    setupMuteButton();
    const btnDefault = document.querySelector('#mode-selector button');
    if (btnDefault) setMode('tr-es', { currentTarget: btnDefault });
};
window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();

function getRandomNumber() {
    const unidades = ["sıfır", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"];
    const decenas = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];
    let n = Math.floor(Math.random() * 100);
    let turco = n < 10 ? unidades[n] : decenas[Math.floor(n/10)] + (n%10 !== 0 ? " " + unidades[n%10] : "");
    return { word: turco, correct: n.toString() };
}
