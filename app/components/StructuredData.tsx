import Script from 'next/script'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://tunel-delta.vercel.app/#organization",
        "name": "VPN Buy & Sell",
        "url": "https://tunel-delta.vercel.app/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tunel-delta.vercel.app/logo.png",
          "width": 280,
          "height": 280
        },
        "description": "Безопасный личный VPN сервис для защиты интернет-соединения",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "availableLanguage": ["Russian"],
          "url": "https://t.me/keml00"
        },
        "sameAs": [
          "https://t.me/vpnbuysell_bot",
          "https://github.com/keml00/tunel"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://tunel-delta.vercel.app/#website",
        "url": "https://tunel-delta.vercel.app/",
        "name": "VPN Buy & Sell",
        "description": "Личный VPN сервис для безопасного интернета",
        "publisher": {
          "@id": "https://tunel-delta.vercel.app/#organization"
        },
        "inLanguage": "ru-RU"
      },
      {
        "@type": "Product",
        "@id": "https://tunel-delta.vercel.app/#product",
        "name": "VPN Buy & Sell - Личный VPN сервис",
        "description": "Безопасный личный VPN для защиты интернет-соединения. Безлимитный трафик, WireGuard протокол, до 5 устройств.",
        "brand": {
          "@type": "Brand",
          "name": "VPN Buy & Sell"
        },
        "offers": [
          {
            "@type": "Offer",
            "name": "1 месяц",
            "price": "200",
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock",
            "url": "https://tunel-delta.vercel.app/pricing",
            "priceValidUntil": "2027-12-31",
            "itemCondition": "https://schema.org/NewCondition"
          },
          {
            "@type": "Offer",
            "name": "3 месяца",
            "price": "550",
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock",
            "url": "https://tunel-delta.vercel.app/pricing",
            "priceValidUntil": "2027-12-31"
          },
          {
            "@type": "Offer",
            "name": "6 месяцев",
            "price": "1000",
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock",
            "url": "https://tunel-delta.vercel.app/pricing",
            "priceValidUntil": "2027-12-31"
          },
          {
            "@type": "Offer",
            "name": "12 месяцев",
            "price": "1800",
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock",
            "url": "https://tunel-delta.vercel.app/pricing",
            "priceValidUntil": "2027-12-31"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Service",
        "serviceType": "VPN Service",
        "provider": {
          "@id": "https://tunel-delta.vercel.app/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Russia"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "VPN тарифы",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "VPN 1 месяц"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Можно ли отменить подписку?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, вы можете отменить подписку в любой момент через панель управления. Доступ сохранится до конца оплаченного периода."
            }
          },
          {
            "@type": "Question",
            "name": "Есть ли пробный период?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, при регистрации вы получаете 7 дней бесплатного доступа с ограничением 10 GB трафика."
            }
          },
          {
            "@type": "Question",
            "name": "Безопасно ли использовать VPN?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, мы используем современный протокол WireGuard с шифрованием AES-256. Сервис соответствует законодательству РФ и предназначен для защиты вашего соединения."
            }
          }
        ]
      }
    ]
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
