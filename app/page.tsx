"use client"

import { useState, useEffect } from "react"
import "./styles/main.scss"

// Icons as SVG components
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
)

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
)

const DigitalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
)

const SoftwareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"/>
  </svg>
)

const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
)

const HelpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
)

const FaqIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
)

// Form types
type FormType = "quote" | "help" | "faq"

export default function NubagonLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFormType, setActiveFormType] = useState<FormType>("quote")
  const [toastMessage, setToastMessage] = useState("")
  const [toastType, setToastType] = useState<"success" | "error">("success")
  const [showToast, setShowToast] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    empresa: "",
    correo: "",
    presupuesto: "",
    descripcion: "",
    intereses: [] as string[],
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      intereses: prev.intereses.includes(interest)
        ? prev.intereses.filter(i => i !== interest)
        : [...prev.intereses, interest]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate form submission
    setToastMessage("Formulario enviado con exito. Nos pondremos en contacto pronto.")
    setToastType("success")
    setShowToast(true)
    
    // Reset form
    setFormData({
      nombre: "",
      apellido: "",
      empresa: "",
      correo: "",
      presupuesto: "",
      descripcion: "",
      intereses: [],
    })

    setTimeout(() => setShowToast(false), 5000)
  }

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header__container">
          <a href="/" className="header__logo">
            NUBA<span>GON</span>
          </a>

          <nav className="header__nav">
            <div className="header__nav-item">
              <a href="#servicios">
                Services <ChevronDownIcon />
              </a>
              <div className="header__dropdown">
                <a href="#ia">IA</a>
                <a href="#web">WEB</a>
                <a href="#movil">MOVIL</a>
                <a href="#cloud">CLOUD</a>
              </div>
            </div>
            <div className="header__nav-item">
              <a href="#productos">
                Products <ChevronDownIcon />
              </a>
              <div className="header__dropdown">
                <a href="#inventario">Punto de Inventario</a>
                <a href="#dashboard">Dashboard</a>
              </div>
            </div>
            <div className="header__nav-item">
              <a href="#nosotros">
                About <ChevronDownIcon />
              </a>
              <div className="header__dropdown">
                <a href="#quienes">Quienes somos</a>
                <a href="#equipo">Equipo</a>
              </div>
            </div>
            <div className="header__nav-item">
              <a href="#blog">Blog</a>
            </div>
            <div className="header__nav-item">
              <a href="#contacto">Contact</a>
            </div>
          </nav>

          <div className="header__actions">
            <span className="header__lang">Es</span>
            <button className="header__search" aria-label="Buscar">
              <SearchIcon />
            </button>
            <button 
              className="header__menu-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <nav className="mobile-menu__nav">
          <a href="#servicios" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#productos" onClick={() => setMobileMenuOpen(false)}>Products</a>
          <a href="#nosotros" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#blog" onClick={() => setMobileMenuOpen(false)}>Blog</a>
          <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </nav>
      </div>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero__container">
            <div className="hero__content">
              <h1>Transformamoxxx tus ideas en soluciones digitales</h1>
              <p>
                Somos expertos en desarrollo web, digitalizacion y software personalizado. 
                Llevamos tu negocio al siguiente nivel con tecnologia de vanguardia.
              </p>
              <div className="hero__actions">
                <a href="#contacto" className="btn btn--primary">
                  Ver productos
                </a>
                <a href="#nosotros" className="btn btn--secondary">
                  Quienes somos
                </a>
              </div>
            </div>
            <div className="hero__visual">
              <div className="hero__image-grid">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop" 
                  alt="Equipo de desarrollo trabajando"
                />
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop" 
                  alt="Dashboard de analytics"
                />
                <img 
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=300&h=200&fit=crop" 
                  alt="Codigo en pantalla"
                />
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop" 
                  alt="Reunión de equipo"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about" id="nosotros">
          <div className="about__container">
            <div className="about__image">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Equipo Nubagon colaborando"
              />
              <div className="about__image-badge">+5 Años</div>
            </div>
            <div className="about__content">
              <h2>Acerca de NUBAGON</h2>
              <p>
                Somos una empresa de tecnologia comprometida con la innovacion y la excelencia. 
                Nuestro equipo de expertos trabaja incansablemente para crear soluciones que 
                impulsen el crecimiento de tu negocio en la era digital.
              </p>
              <p>
                Desde el desarrollo web hasta la inteligencia artificial, ofrecemos servicios 
                integrales que se adaptan a las necesidades unicas de cada cliente.
              </p>
              <div className="about__stats">
                <div className="about__stat">
                  <span className="about__stat-number">50+</span>
                  <span className="about__stat-label">Proyectos</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-number">30+</span>
                  <span className="about__stat-label">Clientes</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-number">99%</span>
                  <span className="about__stat-label">Satisfaccion</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services" id="servicios">
          <div className="services__header">
            <h2>Servicios Destacados</h2>
            <p>Soluciones tecnologicas integrales para impulsar tu negocio hacia el futuro digital</p>
          </div>
          <div className="services__grid">
            <article className="services__card">
              <div className="services__icon">
                <CodeIcon />
              </div>
              <h3 className="services__card-title">Desarrollo Web</h3>
              <p className="services__card-desc">
                Creamos sitios web modernos, rapidos y optimizados para SEO. 
                Desde landing pages hasta aplicaciones web complejas.
              </p>
              <a href="#web" className="services__card-link">
                Explorar solucion <ArrowRightIcon />
              </a>
            </article>

            <article className="services__card">
              <div className="services__icon">
                <DigitalIcon />
              </div>
              <h3 className="services__card-title">Digitalizacion</h3>
              <p className="services__card-desc">
                Transformamos procesos manuales en flujos digitales eficientes. 
                Automatiza tu negocio y aumenta la productividad.
              </p>
              <a href="#digital" className="services__card-link">
                Explorar solucion <ArrowRightIcon />
              </a>
            </article>

            <article className="services__card">
              <div className="services__icon">
                <SoftwareIcon />
              </div>
              <h3 className="services__card-title">SW Personalizado</h3>
              <p className="services__card-desc">
                Desarrollamos software a la medida de tus necesidades. 
                Soluciones unicas que se adaptan a tu forma de trabajar.
              </p>
              <a href="#software" className="services__card-link">
                Explorar solucion <ArrowRightIcon />
              </a>
            </article>
          </div>
        </section>

        {/* Industries Section */}
        <section className="industries" id="industrias">
          <div className="industries__header">
            <h2>Industrias</h2>
            <p>Experiencia especializada en sectores clave de la economia digital</p>
          </div>
          <div className="industries__grid">
            <article className="industries__card">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop" 
                alt="Fintech - Tecnologia financiera"
                className="industries__card-image"
              />
              <div className="industries__card-overlay">
                <div className="industries__card-content">
                  <h3 className="industries__card-title">Fintech</h3>
                  <p className="industries__card-desc">
                    Soluciones innovadoras para el sector financiero. Pagos digitales, 
                    banca movil y sistemas de gestion financiera.
                  </p>
                </div>
              </div>
            </article>

            <article className="industries__card">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop" 
                alt="Health - Tecnologia de salud"
                className="industries__card-image"
              />
              <div className="industries__card-overlay">
                <div className="industries__card-content">
                  <h3 className="industries__card-title">Health</h3>
                  <p className="industries__card-desc">
                    Tecnologia para el sector salud. Telemedicina, gestion hospitalaria 
                    y aplicaciones de bienestar.
                  </p>
                </div>
              </div>
            </article>

            <article className="industries__card">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop" 
                alt="Security - Ciberseguridad"
                className="industries__card-image"
              />
              <div className="industries__card-overlay">
                <div className="industries__card-content">
                  <h3 className="industries__card-title">Security</h3>
                  <p className="industries__card-desc">
                    Proteccion de datos y ciberseguridad. Sistemas de autenticacion, 
                    encriptacion y auditoria de seguridad.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact" id="contacto">
          <div className="contact__container">
            <div className="contact__info">
              <h2>Asesorate con nuestro equipo de expertos</h2>
              <p>
                Estamos listos para ayudarte a llevar tu negocio al siguiente nivel. 
                Selecciona una opcion y cuentanos como podemos ayudarte.
              </p>

              <div className="contact__cta-buttons">
                <button 
                  className={`contact__cta-btn ${activeFormType === "quote" ? "active" : ""}`}
                  onClick={() => setActiveFormType("quote")}
                >
                  <span className="contact__cta-icon">
                    <QuoteIcon />
                  </span>
                  <span className="contact__cta-text">
                    <h4>Cotiza sin compromiso</h4>
                    <span>Recibe una propuesta personalizada</span>
                  </span>
                </button>

                <button 
                  className={`contact__cta-btn ${activeFormType === "help" ? "active" : ""}`}
                  onClick={() => setActiveFormType("help")}
                >
                  <span className="contact__cta-icon">
                    <HelpIcon />
                  </span>
                  <span className="contact__cta-text">
                    <h4>Como podemos ayudarte?</h4>
                    <span>Dudas generales sobre nuestros servicios</span>
                  </span>
                </button>

                <button 
                  className={`contact__cta-btn ${activeFormType === "faq" ? "active" : ""}`}
                  onClick={() => setActiveFormType("faq")}
                >
                  <span className="contact__cta-icon">
                    <FaqIcon />
                  </span>
                  <span className="contact__cta-text">
                    <h4>Preguntas Frecuentes</h4>
                    <span>Respuestas rapidas a dudas comunes</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Dynamic Form */}
            <div className="form">
              {activeFormType === "quote" && (
                <>
                  <div className="form__header">
                    <h3>Solicita una cotizacion</h3>
                    <p>Completa el formulario y te enviaremos una propuesta</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form__row">
                      <div className="form__group">
                        <label htmlFor="nombre" className="form__label">Nombre</label>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          className="form__input"
                          placeholder="Tu nombre"
                          value={formData.nombre}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form__group">
                        <label htmlFor="empresa" className="form__label">Empresa/Organizacion</label>
                        <input
                          type="text"
                          id="empresa"
                          name="empresa"
                          className="form__input"
                          placeholder="Nombre de tu empresa"
                          value={formData.empresa}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form__group">
                      <label htmlFor="correo" className="form__label">Correo electronico</label>
                      <input
                        type="email"
                        id="correo"
                        name="correo"
                        className="form__input"
                        placeholder="tu@email.com"
                        value={formData.correo}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form__group">
                      <label className="form__label">Presupuesto Estimado</label>
                      <div className="form__budget">
                        {["Menos de 5K", "5K-10K", "10K-20K", "20K-30K", ">30K", ">100K"].map((budget) => (
                          <div className="form__budget-option" key={budget}>
                            <input
                              type="radio"
                              id={`budget-${budget}`}
                              name="presupuesto"
                              value={budget}
                              checked={formData.presupuesto === budget}
                              onChange={handleInputChange}
                            />
                            <label htmlFor={`budget-${budget}`}>{budget}</label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="form__group">
                      <label htmlFor="descripcion" className="form__label">Descripcion del proyecto</label>
                      <textarea
                        id="descripcion"
                        name="descripcion"
                        className="form__textarea"
                        placeholder="Cuentanos sobre tu proyecto..."
                        value={formData.descripcion}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <p className="form__disclaimer">
                      Estamos comprometidos a proteger y respetar la privacidad. Por favor revise 
                      nuestra <a href="#privacidad">politica de privacidad</a> para mas informacion. 
                      Al enviar el formulario acepta que NUBAGON almacene y procese la informacion 
                      enviada anteriormente para proporcionarle el contenido solicitado.
                    </p>

                    <button type="submit" className="form__submit">ENVIAR</button>
                  </form>
                </>
              )}

              {activeFormType === "help" && (
                <>
                  <div className="form__header">
                    <h3>Dudas Generales</h3>
                    <p>Cuentanos tu idea y te ayudamos a hacerla realidad</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form__row">
                      <div className="form__group">
                        <label htmlFor="nombre" className="form__label">Nombre</label>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          className="form__input"
                          placeholder="Tu nombre"
                          value={formData.nombre}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form__group">
                        <label htmlFor="apellido" className="form__label">Apellido</label>
                        <input
                          type="text"
                          id="apellido"
                          name="apellido"
                          className="form__input"
                          placeholder="Tu apellido"
                          value={formData.apellido}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form__group">
                      <label htmlFor="correo" className="form__label">Correo electronico</label>
                      <input
                        type="email"
                        id="correo"
                        name="correo"
                        className="form__input"
                        placeholder="tu@email.com"
                        value={formData.correo}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form__group">
                      <label className="form__label">Tengo interes en</label>
                      <div className="form__interests">
                        {["Diseno web", "Software a la medida", "Digitalizacion", "IA", "Cloud"].map((interest) => (
                          <div className="form__interest-option" key={interest}>
                            <input
                              type="checkbox"
                              id={`interest-${interest}`}
                              checked={formData.intereses.includes(interest)}
                              onChange={() => handleInterestChange(interest)}
                            />
                            <label htmlFor={`interest-${interest}`}>{interest}</label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="form__group">
                      <label htmlFor="descripcion" className="form__label">Cual es tu idea?</label>
                      <textarea
                        id="descripcion"
                        name="descripcion"
                        className="form__textarea"
                        placeholder="Describenos tu idea o proyecto..."
                        value={formData.descripcion}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <p className="form__disclaimer">
                      Estamos comprometidos a proteger y respetar la privacidad. Por favor revise 
                      nuestra <a href="#privacidad">politica de privacidad</a> para mas informacion. 
                      Al enviar el formulario acepta que NUBAGON almacene y procese la informacion 
                      enviada anteriormente para proporcionarle el contenido solicitado.
                    </p>

                    <button type="submit" className="form__submit">ENVIAR</button>
                  </form>
                </>
              )}

              {activeFormType === "faq" && (
                <>
                  <div className="form__header">
                    <h3>Preguntas Frecuentes</h3>
                    <p>Respuestas rapidas a las dudas mas comunes</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <details style={{ 
                      background: "#f6f9fc", 
                      padding: "16px 20px", 
                      borderRadius: "10px",
                      cursor: "pointer"
                    }}>
                      <summary style={{ fontWeight: 600, color: "#0a2540" }}>
                        Que servicios tecnicos ofrecen?
                      </summary>
                      <p style={{ marginTop: "12px", color: "#6b7c93", lineHeight: 1.6 }}>
                        Ofrecemos desarrollo web, aplicaciones moviles, software personalizado, 
                        integraciones con IA, servicios cloud y digitalizacion de procesos.
                      </p>
                    </details>

                    <details style={{ 
                      background: "#f6f9fc", 
                      padding: "16px 20px", 
                      borderRadius: "10px",
                      cursor: "pointer"
                    }}>
                      <summary style={{ fontWeight: 600, color: "#0a2540" }}>
                        Como solicito una cotizacion formal?
                      </summary>
                      <p style={{ marginTop: "12px", color: "#6b7c93", lineHeight: 1.6 }}>
                        Puedes solicitar una cotizacion seleccionando &quot;Cotiza sin compromiso&quot; 
                        en esta misma seccion o contactandonos por WhatsApp.
                      </p>
                    </details>

                    <details style={{ 
                      background: "#f6f9fc", 
                      padding: "16px 20px", 
                      borderRadius: "10px",
                      cursor: "pointer"
                    }}>
                      <summary style={{ fontWeight: 600, color: "#0a2540" }}>
                        Cuales son los plazos tipicos de un proyecto?
                      </summary>
                      <p style={{ marginTop: "12px", color: "#6b7c93", lineHeight: 1.6 }}>
                        Los plazos varian segun la complejidad. Un sitio web puede tomar 2-4 semanas, 
                        mientras que un software personalizado puede requerir 2-6 meses.
                      </p>
                    </details>

                    <details style={{ 
                      background: "#f6f9fc", 
                      padding: "16px 20px", 
                      borderRadius: "10px",
                      cursor: "pointer"
                    }}>
                      <summary style={{ fontWeight: 600, color: "#0a2540" }}>
                        Tienen soporte de IA o Cloud?
                      </summary>
                      <p style={{ marginTop: "12px", color: "#6b7c93", lineHeight: 1.6 }}>
                        Si, contamos con expertos en inteligencia artificial y servicios cloud. 
                        Podemos integrar soluciones de IA en tus proyectos y migrar tu infraestructura a la nube.
                      </p>
                    </details>

                    <details style={{ 
                      background: "#f6f9fc", 
                      padding: "16px 20px", 
                      borderRadius: "10px",
                      cursor: "pointer"
                    }}>
                      <summary style={{ fontWeight: 600, color: "#0a2540" }}>
                        Quiero hablar con un especialista
                      </summary>
                      <p style={{ marginTop: "12px", color: "#6b7c93", lineHeight: 1.6 }}>
                        Haz clic en el boton de WhatsApp para conectar directamente con 
                        uno de nuestros especialistas. Estamos disponibles de lunes a viernes.
                      </p>
                    </details>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team" id="equipo">
          <div className="team__header">
            <h2>Nuestro Equipo</h2>
            <p>Profesionales apasionados por la tecnologia y la innovacion</p>
          </div>
          <div className="team__grid">
            <div className="team__member">
              <div className="team__avatar">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
                  alt="Axel Reyes - Founder"
                />
              </div>
              <h3 className="team__name">Axel Reyes</h3>
              <p className="team__role">Founder</p>
            </div>

            <div className="team__member">
              <div className="team__avatar">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face" 
                  alt="José Manuel - Co-Founder"
                />
              </div>
              <h3 className="team__name">Jose Manuel</h3>
              <p className="team__role">Co-Founder</p>
            </div>

            <div className="team__member">
              <div className="team__avatar">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" 
                  alt="Martín Hernández - Co-Founder"
                />
              </div>
              <h3 className="team__name">Martin Hernandez</h3>
              <p className="team__role">Co-Founder</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__grid">
            <div className="footer__brand">
              <h3>NUBA<span>GON</span></h3>
              <p>
                Transformamos ideas en soluciones digitales innovadoras. 
                Tu exito es nuestra mision.
              </p>
              <div className="footer__social">
                <a href="https://tiktok.com" className="footer__social-link" aria-label="TikTok">
                  <TikTokIcon />
                </a>
                <a href="https://facebook.com" className="footer__social-link" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href="https://instagram.com" className="footer__social-link" aria-label="Instagram">
                  <InstagramIcon />
                </a>
              </div>
            </div>

            <div className="footer__column">
              <h4>Servicios</h4>
              <ul>
                <li><a href="#web">WEB</a></li>
                <li><a href="#ia">IA</a></li>
                <li><a href="#software">SW personalizado</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4>Empresa</h4>
              <ul>
                <li><a href="#nosotros">Acerca de nosotros</a></li>
                <li><a href="#contacto">Contacto</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#terminos">Terminos y Condiciones</a></li>
                <li><a href="#privacidad">Politica de Privacidad</a></li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__copy">2026 Nubagon, LLC. Todos los derechos reservados.</p>
            <div className="footer__links">
              <a href="#terminos">Terminos</a>
              <a href="#privacidad">Privacidad</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/1234567890" 
        className="whatsapp-btn" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon />
      </a>

      {/* Toast Notification */}
      <div className={`toast toast--${toastType} ${showToast ? "show" : ""}`}>
        {toastMessage}
      </div>
    </>
  )
}
