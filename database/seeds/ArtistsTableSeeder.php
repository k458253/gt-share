<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

use App\Artist;

class ArtistsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $artists = [
            '[Alexandros]',
            '04 Limited Sazabys',
            '9mm Parabellum Bullet',
            '10-FEET',
            'AC / DC',
            'Acid Black Cherry',
            'ACIDMAN',
            'a crowd of rebellion',
            'Ado',
            'Aerosmith',
            'a flood of circle',
            'Aimer',
            'amazarashi',
            'andymori',
            'androp',
            'ASIAN KUNG-FU GENERATION',
            'Awesome City Club',
            "B'z",
            'B-DASH',
            'BABYMETAL',
            'BACK LIFT',
            'back number',
            'BACK-ON',
            'BAND-MAID',
            'Bank Band',
            'Base Ball Bear',
            'BEGIN',
            'BIGMAMA',
            'BiSH',
            'BLUE ENCOUNT',
            'BOØWY',
            'BORIS',
            'BRAHMAN',
            'BUCK-TICK',
            'BUMP OF CHICKEN',
            'CHAGE and ASKA',
            'Char',
            'CHEMISTRY',
            'ClariS',
            'coldrain',
            'Cream',
            'Crossfaith',
            'Crystal Lake',
            'DA PUMP',
            'DECO*27',
            'DIR EN GREY',
            'DISH//',
            'Dragon Ash',
            'DREAMS COME TRUE',
            'ELLEGARDEN',
            'Eve',
            'EXILE',
            'Fear, and Loathing in Las Vegas',
            'fripSide',
            'FLOW',
            'FTISLAND',
            "FUNKY MONKEY BABY'S",
            'GACKT',
            'GLAY',
            'GLIM SPANKY',
            'GRANRODEO',
            'GReeeeN',
            'HEY-SMITH',
            'Hi-STANDARD',
            'hide',
            'HoneyWorks',
            'Hump Back',
            'HY',
            'HYDE',
            'IRON MAIDEN',
            'JAM Project',
            'JUDY AND MARY',
            'KAN',
            'KANA-BOON',
            'Ken Yokoyama',
            'KinKi Kids',
            'King Crimson',
            'King Gnu',
            'KIRINJI',
            'KEYTALK',
            'Led Zeppelin',
            'LINDBERG',
            'Linked Horizon',
            'Linkin Park',
            'LiSA',
            'Little Glee Monster',
            'LOUDNESS',
            'LUNA SEA',
            "L'Arc～en～Ciel",
            'MAN WITH A MISSION',
            'Megadeth',
            'Metallica',
            'Michael Jackson',
            'miwa',
            'MIYAVI',
            'MONGOL800',
            'MR.BIG',
            'Mr.Children',
            'Mr.FanTastiC',
            'Mrs.GREEN APPLE',
            'MY FIRST STORY',
            'My Hair is Bad',
            'n-buna',
            'NAMBA69',
            'Neru',
            'NIGHTMARE',
            'Nirvana',
            'Non Stop Rabbit',
            "Nothing's Carved In Stone",
            'Novelbright',
            'NUMBER GIRL',
            'OASIS',
            'Official髭男dism',
            "OKAMOTO'S",
            'ONE OK ROCK',
            'ORANGE RANGE',
            'PassCode',
            'Paul Gilbert',
            'Paul McCartney',
            'Pay money To my Pain',
            'RADWIMPS',
            'Red Hot Chili Peppers',
            'Reol',
            'ReoNa',
            'ROTTENGRAFFTY',
            'SCANDAL',
            'SEKAI NO OWARI',
            'SILENT SIREN',
            "SHE'S",
            'SiM',
            'SIX LOUNGE',
            'SMAP',
            'SPYAIR',
            'Slayer',
            'Suchmos',
            'sumika',
            'SUPER BEAVER',
            'Superfly',
            'TETORA',
            'TK from 凛として時雨',
            'THE ALFEE',
            'THE BACK HORN',
            'THE BAWDIES',
            'The Beatles',
            'The Birthday',
            'THE BLUE HEARTS',
            'THE BOOM',
            'the HIATUS',
            'THE HIGH-LOWS',
            'THE YELLOW MONKEY',
            'TM NETWORK',
            'TOKIO',
            'tricot',
            'TUBE',
            'U2',
            'UNISON SQUARE GARDEN',
            'Uru',
            'UVERworld',
            'WANDS',
            'WANIMA',
            'X JAPAN',
            'yama',
            'Yngwie Malmsteen',
            'YOASOBI',
            'yonige',
            'ZARD',
            'ZAZEN BOYS',
            'あいみょん',
            'アルカラ',
            'いきものがかり',
            'ウルフルズ',
            'エレファントカシマシ',
            'きのこ帝国',
            'きゃりーぱみゅぱみゅ',
            'くるり',
            'クリープハイプ',
            'クレイジーケンバンド',
            'ケツメイシ',
            'コブクロ',
            'サイダーガール',
            'サカナクション',
            'サザンオールスターズ',
            'さだまさし',
            'ザ・クロマニヨンズ',
            'サンボマスター',
            'スガ シカオ',
            'スキマスイッチ',
            'ストレイテナー',
            'スピッツ',
            'そこに鳴る',
            'そらる',
            'チェッカーズ',
            'ナオト・インティライミ',
            'ハルカミライ',
            'ハンブレッダーズ',
            'ヒトリエ',
            'フジファブリック',
            'マカロニえんぴつ',
            'マキシマム ザ ホルモン',
            'ももいろクローバーZ',
            'やなぎなぎ',
            'ヤバイTシャツ屋さん',
            'ユニコーン',
            'ゆず',
            '放課後ティータイム',
            '赤い公園',
            '藤井 風',
            '銀杏BOYZ',
            '宮本浩次',
            '嵐',
            '家入レオ',
            '忌野清志郎',
            '大原櫻子',
            '奥田民生',
            '小田和正',
            '尾崎豊',
            '岡崎体育',
            '鬼束ちひろ',
            '宇多田ヒカル',
            '安室奈美恵',
            '川崎鷹也',
            '吉川晃司',
            '桑田佳祐',
            '久保田利伸',
            '倖田來未',
            '米米CLUB',
            '坂本九',
            '崎山蒼志',
            '斉藤和義',
            '沢田研二',
            '清水翔太',
            '湘南乃風',
            '神聖かまってちゃん',
            '鈴木雅之',
            '鈴木このみ',
            '聖飢魔II',
            '玉置浩二',
            '竹原ピストル',
            '谷村新司',
            '高橋優',
            '徳永英明',
            '東京事変',
            '中島美嘉',
            '長渕剛',
            '人間椅子',
            '西野カナ',
            '浜田省吾',
            '秦 基博',
            '平井堅',
            '氷川きよし',
            '福山雅治',
            '藤原さくら',
            '布袋寅泰',
            '星野 源',
            '松任谷由実',
            '松山千春',
            '松田聖子',
            '槇原敬之',
            '三浦大知',
            '水樹奈々',
            '山下達郎',
            '山崎まさよし',
            '矢沢永吉',
            '優里',
            '吉幾三',
            '吉田拓郎',
            '米津玄師',
            '和楽器バンド',
        ];
        sort($artists);
        
        foreach ($artists as $artist) {
            Artist::create(['name' => $artist]);
        }
    }
}
