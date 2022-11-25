// domain.com/news/rafi-ahmad-menang-tenis
// domain.com/news/desta-menangis

import Link from 'next/link';

export default function NewsList() {
  return (
    <section>
      <h1>News List</h1>
      <Link href="/news/rafi-ahmad-menang-tenis">
        <article>
          <h1>Rafi Ahmad Menang Tenis</h1>
        </article>
      </Link>
      <article>
        <h1>Desta Menangis</h1>
      </article>
    </section>
  );
}
