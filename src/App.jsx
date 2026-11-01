import { useEffect, useMemo, useState } from 'react'
import './App.css'

const BASE_BOXES = [
  {
    id: 1,
    label: 'BOX 01',
    difficulty: 'EASY',
    points: 1,
    question: 'Dalam penelitian, apa yang dimaksud dengan unit analisis?',
    options: [
      { key: 'A', text: 'Teknik yang digunakan untuk mengumpulkan data penelitian.' },
      { key: 'B', text: 'Objek utama yang dianalisis dan menjadi dasar penarikan kesimpulan.' },
      { key: 'C', text: 'Seluruh data yang dikumpulkan oleh peneliti.' },
      { key: 'D', text: 'Proses pengolahan data menjadi laporan penelitian.' },
    ],
    answer: 'B',
    explanation:
      'Unit analisis adalah objek utama yang dianalisis dalam penelitian dan menjadi dasar penarikan kesimpulan.',
  },
  {
    id: 2,
    label: 'BOX 02',
    difficulty: 'EASY',
    points: 1,
    question:
      'Seorang peneliti ingin mengetahui tingkat kepuasan mahasiswa terhadap penggunaan e-learning. Berdasarkan contoh tersebut, unit analisis yang tepat adalah...',
    options: [
      { key: 'A', text: 'Mahasiswa.' },
      { key: 'B', text: 'Aplikasi e-learning saja.' },
      { key: 'C', text: 'Ruang kelas.' },
      { key: 'D', text: 'Dokumen perkuliahan.' },
    ],
    answer: 'A',
    explanation:
      'Mahasiswa merupakan objek yang dianalisis karena penelitian berfokus pada kepuasan mahasiswa terhadap penggunaan e-learning.',
  },
  {
    id: 3,
    label: 'BOX 03',
    difficulty: 'EASY',
    points: 1,
    question:
      'Peneliti melakukan wawancara secara langsung kepada mahasiswa untuk memperoleh informasi yang dibutuhkan dalam penelitiannya. Berdasarkan sumber perolehannya, data tersebut termasuk...',
    options: [
      { key: 'A', text: 'Data sekunder.' },
      { key: 'B', text: 'Data dokumentasi.' },
      { key: 'C', text: 'Data primer.' },
      { key: 'D', text: 'Data statistik pemerintah.' },
    ],
    answer: 'C',
    explanation:
      'Data primer diperoleh langsung oleh peneliti dari sumber pertama, misalnya melalui wawancara, kuesioner, observasi, atau eksperimen.',
  },
  {
    id: 4,
    label: 'BOX 04',
    difficulty: 'MEDIUM',
    points: 2,
    question:
      'Sebuah penelitian membahas kualitas pelayanan rumah sakit berdasarkan persepsi pasien. Peneliti memperoleh informasi dengan mengamati dan mewawancarai pasien, tetapi kesimpulan penelitian ditujukan untuk menilai kualitas pelayanan rumah sakit. Manakah pasangan yang paling tepat?',
    options: [
      { key: 'A', text: 'Unit analisis: pasien; unit observasi: rumah sakit.' },
      {
        key: 'B',
        text: 'Unit analisis: kualitas pelayanan rumah sakit; unit observasi: pasien.',
      },
      { key: 'C', text: 'Unit analisis: wawancara; unit observasi: kualitas pelayanan.' },
      { key: 'D', text: 'Unit analisis: rumah sakit; unit observasi: kesimpulan penelitian.' },
    ],
    answer: 'B',
    explanation:
      'Unit analisis adalah objek yang dianalisis dan menjadi dasar kesimpulan, sedangkan unit observasi merupakan objek atau sumber tempat informasi diperoleh.',
  },
  {
    id: 5,
    label: 'BOX 05',
    difficulty: 'MEDIUM',
    points: 2,
    question:
      'Seorang peneliti mengumpulkan skor kepuasan mahasiswa dalam bentuk angka. Pada penelitian lain, peneliti mengumpulkan narasi pengalaman mahasiswa melalui wawancara. Kedua data tersebut diklasifikasikan berdasarkan bentuknya. Pernyataan yang benar adalah...',
    options: [
      {
        key: 'A',
        text: 'Skor kepuasan merupakan data kualitatif, sedangkan narasi wawancara merupakan data kuantitatif.',
      },
      {
        key: 'B',
        text: 'Keduanya merupakan data sekunder karena diperoleh dari mahasiswa.',
      },
      {
        key: 'C',
        text: 'Skor kepuasan merupakan data kuantitatif, sedangkan narasi wawancara merupakan data kualitatif.',
      },
      {
        key: 'D',
        text: 'Keduanya hanya dapat digunakan dalam penelitian kuantitatif.',
      },
    ],
    answer: 'C',
    explanation:
      'Data kuantitatif berbentuk angka atau pengukuran numerik, sedangkan data kualitatif dapat berupa kata, narasi, tindakan, dokumen, gambar, suara, atau makna.',
  },
  {
    id: 6,
    label: 'BOX 06',
    difficulty: 'MEDIUM',
    points: 2,
    question:
      'Seorang peneliti ingin memahami secara mendalam pengalaman mahasiswa ketika menggunakan sistem e-learning, termasuk alasan mereka merasa terbantu atau mengalami kesulitan. Teknik pengumpulan data yang paling sesuai adalah...',
    options: [
      { key: 'A', text: 'Wawancara mendalam.' },
      { key: 'B', text: 'Kuesioner tertutup saja.' },
      { key: 'C', text: 'Pengukuran tinggi badan.' },
      { key: 'D', text: 'Dokumentasi statistik pemerintah.' },
    ],
    answer: 'A',
    explanation:
      'Wawancara mendalam memberikan ruang bagi partisipan untuk menjelaskan pengalaman, alasan, dan pandangan mereka secara lebih terperinci.',
  },
  {
    id: 7,
    label: 'BOX 07',
    difficulty: 'HARD',
    points: 3,
    question:
      'Sebuah penelitian mengangkat topik “Hubungan penggunaan e-learning dengan kepuasan belajar mahasiswa”. Peneliti ingin mengukur skor penggunaan e-learning dan skor kepuasan belajar, kemudian menganalisis hubungan kedua variabel tersebut. Peneliti menggunakan desain kuantitatif korelasional dan kuesioner sebagai teknik pengumpulan data. Kesimpulan manakah yang paling tepat berdasarkan rancangan tersebut?',
    options: [
      {
        key: 'A',
        text: 'Penelitian pasti membuktikan bahwa penggunaan e-learning menyebabkan kepuasan belajar meningkat.',
      },
      {
        key: 'B',
        text: 'Unit analisisnya adalah kuesioner karena seluruh data diperoleh melalui kuesioner.',
      },
      {
        key: 'C',
        text: 'Penelitian tidak dapat menggunakan data numerik karena membahas kepuasan belajar.',
      },
      {
        key: 'D',
        text: 'Penelitian dapat menunjukkan hubungan antarvariabel, tetapi tidak otomatis membuktikan hubungan sebab-akibat.',
      },
    ],
    answer: 'D',
    explanation:
      'Desain korelasional digunakan untuk menguji hubungan antarvariabel. Hubungan yang ditemukan tidak otomatis membuktikan sebab-akibat. Dalam contoh PPT, unit analisisnya adalah mahasiswa, data berupa skor penggunaan e-learning dan kepuasan belajar, serta teknik yang digunakan adalah kuesioner.',
  },
  {
    id: 8,
    label: 'BOX 08',
    difficulty: 'HARD',
    points: 3,
    question:
      'Dalam sebuah penelitian, peneliti ingin memahami pengalaman mahasiswa secara mendalam. Karena itu, peneliti memilih beberapa mahasiswa, lokasi, atau dokumen yang dianggap paling relevan untuk membantu memahami masalah penelitian. Teknik pemilihan sumber data yang paling sesuai dengan penjelasan tersebut adalah...',
    options: [
      {
        key: 'A',
        text: 'Probability sampling, yaitu memilih sampel berdasarkan peluang yang diketahui sesuai rancangan.',
      },
      {
        key: 'B',
        text: 'Purposive sampling, yaitu memilih sumber yang dipandang paling relevan dengan masalah penelitian.',
      },
      {
        key: 'C',
        text: 'Pengukuran eksperimen, yaitu memberikan perlakuan kepada seluruh responden.',
      },
      {
        key: 'D',
        text: 'Dokumentasi numerik, yaitu mengambil data statistik yang sudah tersedia.',
      },
    ],
    answer: 'B',
    explanation:
      'Purposive sampling dilakukan dengan memilih individu, lokasi, dokumen, atau materi yang dipandang paling relevan untuk memahami masalah penelitian.',
  },
  {
    id: 9,
    label: 'BOX 09',
    difficulty: 'HARD',
    points: 3,
    question:
      'Peneliti akan mengkaji efektivitas penggunaan e-learning terhadap kepuasan belajar mahasiswa. Sebelum mengumpulkan data, peneliti harus memastikan bahwa objek yang dianalisis, jenis informasi, sumber informasi, dan teknik pengumpulan datanya saling sesuai. Urutan penentuan yang paling sesuai dengan alur pada materi presentasi adalah...',
    options: [
      {
        key: 'A',
        text: 'Memilih teknik pengumpulan data, mengumpulkan semua informasi, lalu menentukan tujuan penelitian.',
      },
      {
        key: 'B',
        text: 'Menentukan sumber data, membuat kesimpulan, lalu memilih unit analisis.',
      },
      {
        key: 'C',
        text: 'Merumuskan masalah dan tujuan, menentukan unit analisis, memilih desain penelitian, menentukan data yang dibutuhkan, menentukan sumber data/unit observasi, lalu memilih teknik pengumpulan data.',
      },
      {
        key: 'D',
        text: 'Memilih sampel terlebih dahulu, menentukan hasil penelitian, lalu menyusun rumusan masalah.',
      },
    ],
    answer: 'C',
    explanation:
      'Penentuan data dan teknik pengumpulan data harus mengikuti alur yang sistematis. Dimulai dari rumusan masalah dan tujuan, kemudian unit analisis, desain, kebutuhan data, sumber data/unit observasi, dan teknik pengumpulan data.',
  },
]

const DIFFICULTY_LABELS = {
  EASY: 'MUDAH',
  MEDIUM: 'SEDANG',
  HARD: 'SULIT',
}

function RuleIcon({ name }) {
  const iconPaths = {
    box: (
      <>
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="m4.3 7.6 7.7 4.5 7.7-4.5M12 12v9M8 5.3l8 4.6" />
      </>
    ),
    levels: (
      <>
        <path d="M4 18h4v-5H4zM10 18h4V9h-4zM16 18h4V5h-4z" />
        <path d="M3 21h18" />
      </>
    ),
    answer: (
      <>
        <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H7l-4 2v-5.5A7.5 7.5 0 1 1 20 11.5Z" />
        <path d="M8 11h.01M12 11h.01M16 11h.01" />
      </>
    ),
    retry: (
      <>
        <path d="M20 7v5h-5M4 17v-5h5" />
        <path d="M5.5 9A7 7 0 0 1 17 6.5L20 12M4 12l3 5.5A7 7 0 0 0 19.5 15" />
      </>
    ),
    points: (
      <>
        <path d="M8 4h8v4a4 4 0 0 1-8 0V4ZM8 6H5v2a4 4 0 0 0 4 4M16 6h3v2a4 4 0 0 1-4 4M12 12v5M8 21h8M10 17h4v4h-4z" />
      </>
    ),
    leaderboard: (
      <>
        <path d="M4 20V12h4v8M10 20V5h4v15M16 20V9h4v11" />
        <path d="M3 21h18" />
      </>
    ),
  }

  return (
    <svg
      className="rule-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  )
}

function App() {
  const [screen, setScreen] = useState('welcome')
  const [boxes, setBoxes] = useState(
    BASE_BOXES.map((box) => ({
      ...box,
      status: 'open',
      wrongOptions: [],
      winner: '',
    })),
  )
  const [leaderboard, setLeaderboard] = useState([])
  const [activeBoxId, setActiveBoxId] = useState(null)
  const [pendingBoxId, setPendingBoxId] = useState(null)
  const [countdown, setCountdown] = useState(null)
  const [correctSelection, setCorrectSelection] = useState(null)
  const [winnerName, setWinnerName] = useState('')
  const [notice, setNotice] = useState('')

  const activeBox = boxes.find((box) => box.id === activeBoxId) ?? null
  const completedCount = boxes.filter((box) => box.status === 'won').length
  const totalPoints = leaderboard.reduce((sum, player) => sum + player.points, 0)

  const sortedLeaderboard = useMemo(
    () => [...leaderboard].sort((a, b) => b.points - a.points || a.name.localeCompare(b.name)),
    [leaderboard],
  )

  const winnerTie = useMemo(() => {
    const leadingScore = sortedLeaderboard[0]?.points ?? 0
    return sortedLeaderboard.filter((player) => player.points === leadingScore)
  }, [sortedLeaderboard])

  useEffect(() => {
    if (screen === 'game' && completedCount === BASE_BOXES.length) {
      setScreen('results')
    }
  }, [completedCount, screen])

  useEffect(() => {
    if (pendingBoxId === null || countdown === null) {
      return undefined
    }

    const timer = window.setTimeout(() => {
      if (countdown > 1) {
        setCountdown(countdown - 1)
        return
      }

      setActiveBoxId(pendingBoxId)
      setPendingBoxId(null)
      setCountdown(null)
    }, 1000)

    return () => window.clearTimeout(timer)
  }, [countdown, pendingBoxId])

  const openBox = (boxId) => {
    const box = boxes.find((item) => item.id === boxId)
    if (!box || box.status === 'won' || pendingBoxId !== null || activeBoxId !== null) {
      return
    }

    setPendingBoxId(boxId)
    setCountdown(3)
    setCorrectSelection(null)
    setWinnerName('')
    setNotice('')
  }

  const cancelCountdown = () => {
    setPendingBoxId(null)
    setCountdown(null)
  }

  const handleAnswer = (boxId, optionKey) => {
    const box = boxes.find((item) => item.id === boxId)
    if (!box || box.status === 'won' || box.wrongOptions.includes(optionKey)) {
      return
    }

    if (box.answer === optionKey) {
      setCorrectSelection({ boxId, optionKey })
      setNotice('Jawaban benar. Masukkan nama pemenang untuk menambahkan poin.')
      return
    }

    setBoxes((previous) =>
      previous.map((item) =>
        item.id === boxId ? { ...item, wrongOptions: [...item.wrongOptions, optionKey] } : item,
      ),
    )
    setNotice('Jawaban salah. Pilihan ini tidak dapat dipilih kembali.')
  }

  const finalizeWinner = () => {
    if (!activeBox) {
      return
    }

    const name = winnerName.trim().toLocaleUpperCase('id-ID')
    if (!name) {
      setNotice('Masukkan nama peserta terlebih dahulu.')
      return
    }

    setBoxes((previous) =>
      previous.map((item) =>
        item.id === activeBox.id
          ? {
              ...item,
              status: 'won',
              winner: name,
            }
          : item,
      ),
    )

    setLeaderboard((previous) => {
      const existingPlayer = previous.find(
        (player) => player.name.toLocaleUpperCase('id-ID') === name,
      )

      if (existingPlayer) {
        return previous.map((player) =>
          player.name.toLocaleUpperCase('id-ID') === name
            ? { ...player, points: player.points + activeBox.points }
            : player,
        )
      }

      return [...previous, { name, points: activeBox.points }]
    })

    setActiveBoxId(null)
    setCorrectSelection(null)
    setWinnerName('')
    setNotice(`${name} berhasil memenangkan ${activeBox.label} dan memperoleh ${activeBox.points} poin.`)
  }

  const resetGame = () => {
    setBoxes(
      BASE_BOXES.map((box) => ({
        ...box,
        status: 'open',
        wrongOptions: [],
        winner: '',
      })),
    )
    setLeaderboard([])
    setScreen('welcome')
    setActiveBoxId(null)
    setPendingBoxId(null)
    setCountdown(null)
    setCorrectSelection(null)
    setWinnerName('')
    setNotice('')
  }

  const renderWelcome = () => (
    <div className="screen-screen welcome-screen">
      <div className="hero-panel">
        <div className="hero-boxes" aria-hidden="true">
          {[...Array(9)].map((_, index) => (
            <span key={index} className={`mini-box level-${(index % 3) + 1}`} />
          ))}
        </div>

        <div className="welcome-copy">
          <p className="eyebrow">TANTANGAN KUIS KELAS</p>
          <h1>BOX CHALLENGE</h1>
          <h2>Pilih Kotakmu, Raih Poinmu!</h2>
          <p className="lead">
            Kuis interaktif kelas berdasarkan materi Unit Analisis, Data, dan Cara Memperolehnya.
          </p>
          <div className="presented-block">
            <span>DIPERSEMBAHKAN OLEH</span>
            <strong>KELOMPOK 4</strong>
          </div>
          <button type="button" className="primary-button" onClick={() => setScreen('rules')}>
            MULAI PERMAINAN →
          </button>
        </div>
      </div>
    </div>
  )

  const renderRules = () => (
    <div className="screen-screen rules-screen">
      <div className="rules-card">
        <p className="eyebrow">CARA BERMAIN</p>
        <h2>Pahami aturan. Pilih dengan cermat. Raih poinmu.</h2>

        <ol className="rules-list">
          <li>
            <div className="rule-icon-wrap"><RuleIcon name="box" /></div>
            <div className="rule-copy">
              <span className="rule-number">01</span>
              <strong>PILIH KOTAK</strong>
              <span>Pilih satu dari sembilan kotak yang belum dimainkan. Moderator menentukan peserta yang lebih dulu menjawab.</span>
            </div>
          </li>
          <li>
            <div className="rule-icon-wrap"><RuleIcon name="levels" /></div>
            <div className="rule-copy">
              <span className="rule-number">02</span>
              <strong>KENALI POIN</strong>
              <span>Hijau mudah bernilai 1 poin, kuning sedang 2 poin, dan merah sulit 3 poin.</span>
            </div>
          </li>
          <li>
            <div className="rule-icon-wrap"><RuleIcon name="answer" /></div>
            <div className="rule-copy">
              <span className="rule-number">03</span>
              <strong>JAWAB PERTANYAAN</strong>
              <span>Pilih jawaban A, B, C, atau D. Peserta menyampaikan jawaban kepada moderator.</span>
            </div>
          </li>
          <li>
            <div className="rule-icon-wrap"><RuleIcon name="retry" /></div>
            <div className="rule-copy">
              <span className="rule-number">04</span>
              <strong>MASIH BISA MENCOBA</strong>
              <span>Jawaban salah terkunci. Peserta lain dapat mencoba pilihan yang masih tersedia.</span>
            </div>
          </li>
          <li>
            <div className="rule-icon-wrap"><RuleIcon name="points" /></div>
            <div className="rule-copy">
              <span className="rule-number">05</span>
              <strong>RAIH POIN</strong>
              <span>Jawaban benar mengunci kotak. Moderator memasukkan nama, lalu poin ditambahkan.</span>
            </div>
          </li>
          <li>
            <div className="rule-icon-wrap"><RuleIcon name="leaderboard" /></div>
            <div className="rule-copy">
              <span className="rule-number">06</span>
              <strong>PANTAU KLASEMEN</strong>
              <span>Nama dan poin langsung tercatat. Setelah 9 kotak selesai, lihat dua peringkat teratas; skor seri ditampilkan bersama.</span>
            </div>
          </li>
        </ol>

        <button type="button" className="primary-button" onClick={() => setScreen('game')}>
          MENGERTI — AYO BERMAIN
        </button>
      </div>
    </div>
  )

  const renderGame = () => (
    <div className="screen-screen game-screen">
      <div className="game-layout">
        <section className="game-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">BOX CHALLENGE</p>
              <h2>Pilih kotakmu. Uji pengetahuanmu.</h2>
            </div>
            <div className="status-badges">
              <span>{BASE_BOXES.length} Kotak</span>
              <span>{completedCount} Selesai</span>
              <span>{totalPoints} Total Poin</span>
            </div>
          </div>

          <div className="progress-row">
            <span>STATUS KOTAK: {completedCount} / {BASE_BOXES.length} SELESAI</span>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${(completedCount / BASE_BOXES.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="box-grid">
            {boxes.map((box) => (
              <button
                key={box.id}
                type="button"
                className={`box-card difficulty-${box.difficulty.toLowerCase()} ${
                  box.status === 'won' ? 'is-won' : ''
                } ${activeBoxId === box.id ? 'is-active' : ''}`}
                onClick={() => openBox(box.id)}
                disabled={box.status === 'won'}
                aria-label={`Kotak ${String(box.id).padStart(2, '0')}, tingkat ${DIFFICULTY_LABELS[box.difficulty]}, ${box.points} poin${
                  box.status === 'won' ? `, dijawab oleh ${box.winner}` : ''
                }`}
              >
                <span className="box-label">KOTAK</span>
                <strong className="box-number">{String(box.id).padStart(2, '0')}</strong>
                {box.status === 'won' ? (
                  <span className="box-winner">{box.winner}</span>
                ) : (
                  <span className="box-difficulty">{DIFFICULTY_LABELS[box.difficulty]}</span>
                )}
                <small className="box-points">{box.points} POIN</small>
              </button>
            ))}
          </div>
        </section>

        <aside className="leaderboard-panel">
          <h3>KLASEMEN LANGSUNG</h3>
          <div className="leaderboard-list">
            {sortedLeaderboard.length === 0 ? (
              <p className="leaderboard-empty">
                Nama peserta akan muncul di sini setelah berhasil menjawab.
              </p>
            ) : sortedLeaderboard.map((player, index) => (
              <div key={`${player.name}-${index}`} className="leaderboard-item">
                <div>
                  <span className="position">#{index + 1}</span>
                  <span className="name">{player.name}</span>
                </div>
                <strong>{player.points} poin</strong>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {activeBox && (
        <div
          className="modal-overlay"
          onClick={() => {
            setActiveBoxId(null)
            setCorrectSelection(null)
          }}
        >
          <div className="question-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="close-button"
              onClick={() => {
                setActiveBoxId(null)
                setCorrectSelection(null)
              }}
            >
              ×
            </button>

            <div className="question-topline">
              <span>{activeBox.label}</span>
              <span className={`difficulty-pill difficulty-${activeBox.difficulty.toLowerCase()}`}>
                {DIFFICULTY_LABELS[activeBox.difficulty]}
              </span>
            </div>

            <h3>{activeBox.question}</h3>

            <div className="option-list">
              {activeBox.options.map((option) => {
                const isSelectedWrong = activeBox.wrongOptions.includes(option.key)
                const isCorrectChoice =
                  correctSelection?.boxId === activeBox.id && correctSelection.optionKey === option.key
                const isLocked =
                  isSelectedWrong || activeBox.status === 'won' || (correctSelection?.boxId === activeBox.id && !isCorrectChoice)

                return (
                  <button
                    key={option.key}
                    type="button"
                    className={`answer-option ${isSelectedWrong ? 'wrong' : ''} ${
                      isCorrectChoice ? 'correct' : ''
                    }`}
                    onClick={() => handleAnswer(activeBox.id, option.key)}
                    disabled={isLocked}
                  >
                    <span>{option.key}</span>
                    {option.text}
                  </button>
                )
              })}
            </div>

            {correctSelection?.boxId === activeBox.id && (
              <div className="answer-explanation">
                <strong>Penjelasan</strong>
                <p>{activeBox.explanation}</p>
              </div>
            )}

            {correctSelection?.boxId === activeBox.id && (
              <form
                className="winner-form"
                onSubmit={(event) => {
                  event.preventDefault()
                  finalizeWinner()
                }}
              >
                <label htmlFor="winner-name">Nama peserta yang menjawab benar</label>
                <div className="input-row">
                  <input
                    id="winner-name"
                    type="text"
                    value={winnerName}
                    onChange={(event) =>
                      setWinnerName(event.target.value.toLocaleUpperCase('id-ID'))
                    }
                    placeholder="Masukkan nama peserta"
                    autoComplete="off"
                  />
                  <button type="submit" className="submit-winner">
                    KIRIM
                  </button>
                </div>
              </form>
            )}

            {notice && <p className="notice-text">{notice}</p>}
          </div>
        </div>
      )}

      {countdown !== null && (
        <div className="countdown-overlay" aria-live="assertive" aria-atomic="true">
          <div className="countdown-card">
            <p className="eyebrow">KOTAK TERPILIH</p>
            <h2>Bersiap!</h2>
            <span className="countdown-number" key={countdown}>
              {countdown}
            </span>
            <p>Pertanyaan segera dimulai</p>
            <button type="button" className="countdown-cancel" onClick={cancelCountdown}>
              BATAL
            </button>
          </div>
        </div>
      )}
    </div>
  )

  const renderResults = () => (
    <div className="screen-screen results-screen">
      <div className="results-card">
        <p className="eyebrow">HASIL AKHIR</p>
        <h2>Peserta Teratas</h2>

        <div className="winners-row">
          {sortedLeaderboard.slice(0, 2).map((player, index) => (
            <div key={player.name} className={`winner-box rank-${index + 1}`}>
              <span className="winner-rank">#{index + 1}</span>
              <strong>{player.name}</strong>
              <em>{player.points} poin</em>
            </div>
          ))}
        </div>

        <div className="summary-banner">
          {winnerTie.length > 1 ? (
            <p>
              Skor seri terjadi pada posisi teratas. Para pemenang yang seri: {winnerTie
                .map((player) => player.name)
                .join(', ')}.
            </p>
          ) : (
            <p>
              {sortedLeaderboard[0]?.name} berhasil menjadi pemenang dengan total{' '}
              {sortedLeaderboard[0]?.points} poin.
            </p>
          )}
        </div>

        <div className="leaderboard-table">
          {sortedLeaderboard.map((player, index) => (
            <div key={player.name} className="result-row">
              <span>#{index + 1}</span>
              <strong>{player.name}</strong>
              <em>{player.points} POIN</em>
            </div>
          ))}
        </div>

        <div className="results-actions">
          <button type="button" className="primary-button" onClick={resetGame}>
            MAIN LAGI
          </button>
        </div>
      </div>
    </div>
  )

  if (screen === 'welcome') return renderWelcome()
  if (screen === 'rules') return renderRules()
  if (screen === 'game') return renderGame()
  return renderResults()
}

export default App
