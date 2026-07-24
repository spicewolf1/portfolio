import { useState, type SubmitEvent } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ name, email, message })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display text-3xl font-700 text-ink">
          ありがとうございます 🎉
        </h1>
        <p className="mt-2 text-ink/70">メッセージを受け取りました。</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl font-700 text-ink">Contact</h1>
      <p className="mt-2 text-ink/60">気軽にメッセージどうぞ。</p>

      <form onSubmit={handleSubmit} className="mt-8 max-w-md space-y-4">
        <div>
          <label className="block font-display text-sm text-ink">お名前</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 w-full rounded-2xl border border-ink/10 bg-white px-4 py-2 outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block font-display text-sm text-ink">
            メールアドレス
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full rounded-2xl border border-ink/10 bg-white px-4 py-2 outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block font-display text-sm text-ink">
            メッセージ
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="mt-1 w-full rounded-2xl border border-ink/10 bg-white px-4 py-2 outline-none focus:border-accent"
          />
        </div>

        <button
          type="submit"
          className="rounded-full bg-accent px-6 py-2 font-display font-600 text-white transition hover:bg-accent/90"
        >
          送信する
        </button>
      </form>
    </div>
  )
}

export default Contact
