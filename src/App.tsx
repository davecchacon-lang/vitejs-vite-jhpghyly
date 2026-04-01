import { useState } from 'react';

// ─── MOCK DATA ────────────────────────────────────────────────────────────────
const LISTINGS = [
  // Bienes Raíces
  {
    id: 1,
    cat: 'bienes-raices',
    sub: 'Casa',
    op: 'Venta',
    title: 'Casa en Escazú, 3 hab',
    price: 485000,
    currency: 'USD',
    province: 'San José',
    canton: 'Escazú',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80',
    date: 'hace 2 días',
    owner: 'Carlos M.',
    phone: '+506 8888-1234',
    featured: true,
    detail:
      'Casa de 320m² en zona residencial, 3 hab, 2 baños, cochera doble, jardín.',
  },
  {
    id: 2,
    cat: 'bienes-raices',
    sub: 'Apartamento',
    op: 'Alquiler',
    title: 'Apto en Heredia, 2 hab',
    price: 750,
    currency: 'USD',
    province: 'Heredia',
    canton: 'Heredia',
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80',
    date: 'hace 1 día',
    owner: 'Sofía C.',
    phone: '+506 8777-5678',
    featured: false,
    detail: 'Apartamento moderno, 85m², 2 hab, 1 baño, incluye agua y cable.',
  },
  {
    id: 3,
    cat: 'bienes-raices',
    sub: 'Lote',
    op: 'Venta',
    title: 'Lote en Tamarindo 1200m²',
    price: 95000,
    currency: 'USD',
    province: 'Guanacaste',
    canton: 'Tamarindo',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&q=80',
    date: 'hace 3 días',
    owner: 'Roberto F.',
    phone: '+506 8666-9012',
    featured: true,
    detail: 'Lote plano a 500m de la playa, zona turística con alta plusvalía.',
  },
  {
    id: 4,
    cat: 'bienes-raices',
    sub: 'Casa',
    op: 'Venta',
    title: 'Villa en Manuel Antonio',
    price: 1250000,
    currency: 'USD',
    province: 'Puntarenas',
    canton: 'Quepos',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&q=80',
    date: 'hace 5 días',
    owner: 'Laura V.',
    phone: '+506 8555-3456',
    featured: true,
    detail: 'Villa de lujo 650m², 5 hab, 4 baños, piscina, vista al mar.',
  },
  // Vehículos
  {
    id: 5,
    cat: 'vehiculos',
    sub: 'Sedan',
    op: 'Venta',
    title: 'Toyota Corolla 2021',
    price: 18500,
    currency: 'USD',
    province: 'San José',
    canton: 'San José',
    img: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&q=80',
    date: 'hace 1 día',
    owner: 'Marco S.',
    phone: '+506 8444-7890',
    featured: true,
    detail: '42,000 km, automático, A/C, revisión técnica al día, único dueño.',
  },
  {
    id: 6,
    cat: 'vehiculos',
    sub: 'SUV',
    op: 'Venta',
    title: 'Hyundai Tucson 2020',
    price: 22000,
    currency: 'USD',
    province: 'Alajuela',
    canton: 'Alajuela',
    img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&q=80',
    date: 'hace 4 días',
    owner: 'Diego Q.',
    phone: '+506 8333-2345',
    featured: false,
    detail:
      '55,000 km, full equipo, cámara de retroceso, airbags, excelente condición.',
  },
  {
    id: 7,
    cat: 'vehiculos',
    sub: 'Pickup',
    op: 'Venta',
    title: 'Toyota Hilux 2019 4x4',
    price: 28000,
    currency: 'USD',
    province: 'Cartago',
    canton: 'Cartago',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
    date: 'hace 2 días',
    owner: 'Gabriela M.',
    phone: '+506 8222-6789',
    featured: false,
    detail: '68,000 km, diesel, doble cabina, excelente para campo y ciudad.',
  },
  {
    id: 8,
    cat: 'vehiculos',
    sub: 'Moto',
    op: 'Venta',
    title: 'Honda CB500 2022',
    price: 6200,
    currency: 'USD',
    province: 'Heredia',
    canton: 'Heredia',
    img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&q=80',
    date: 'hace 6 días',
    owner: 'Andrés P.',
    phone: '+506 8111-0123',
    featured: false,
    detail: '12,000 km, perfectas condiciones, papeles al día, casco incluido.',
  },
  // Empleos
  {
    id: 9,
    cat: 'empleos',
    sub: 'Tecnología',
    op: 'Tiempo completo',
    title: 'Desarrollador React Senior',
    price: 2500,
    currency: 'USD',
    province: 'San José',
    canton: 'Escazú',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80',
    date: 'hace 1 día',
    owner: 'TechCorp CR',
    phone: '+506 2200-1111',
    featured: true,
    detail:
      '3+ años experiencia React, remoto/híbrido, excelentes beneficios, seguro médico.',
  },
  {
    id: 10,
    cat: 'empleos',
    sub: 'Ventas',
    op: 'Tiempo completo',
    title: 'Ejecutivo de Ventas B2B',
    price: 1200,
    currency: 'USD',
    province: 'San José',
    canton: 'San José',
    img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&q=80',
    date: 'hace 2 días',
    owner: 'Soldi Enterprises',
    phone: '+506 2200-2222',
    featured: false,
    detail:
      'Base + comisiones, cartera de clientes, vehículo de empresa, experiencia en ventas.',
  },
  {
    id: 11,
    cat: 'empleos',
    sub: 'Turismo',
    op: 'Medio tiempo',
    title: 'Guía Turístico Bilingüe',
    price: 800,
    currency: 'USD',
    province: 'Guanacaste',
    canton: 'Liberia',
    img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&q=80',
    date: 'hace 3 días',
    owner: 'Aventuras CR',
    phone: '+506 2200-3333',
    featured: false,
    detail:
      'Inglés avanzado requerido, conocimiento de flora/fauna, propinas incluidas.',
  },
  {
    id: 12,
    cat: 'empleos',
    sub: 'Administración',
    op: 'Tiempo completo',
    title: 'Asistente Administrativo',
    price: 700,
    currency: 'USD',
    province: 'Alajuela',
    canton: 'Alajuela',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
    date: 'hace 5 días',
    owner: 'Grupo Mora S.A.',
    phone: '+506 2200-4444',
    featured: false,
    detail: 'Manejo de Office, atención al cliente, horario 8-5, zona franca.',
  },
];

const CATS = [
  { id: 'todos', label: 'Todo', icon: '◈' },
  { id: 'bienes-raices', label: 'Bienes Raíces', icon: '⌂' },
  { id: 'vehiculos', label: 'Vehículos', icon: '◉' },
  { id: 'empleos', label: 'Empleos', icon: '◆' },
];

const PROVINCES = [
  'Todas',
  'San José',
  'Alajuela',
  'Heredia',
  'Cartago',
  'Guanacaste',
  'Puntarenas',
  'Limón',
];

const FORM_CATS = {
  'bienes-raices': {
    label: 'Bienes Raíces',
    subs: ['Casa', 'Apartamento', 'Lote', 'Local Comercial', 'Finca'],
    ops: ['Venta', 'Alquiler'],
    pricePlaceholder: '250000',
    priceLabel: 'Precio (USD)',
  },
  vehiculos: {
    label: 'Vehículos',
    subs: ['Sedan', 'SUV', 'Pickup', 'Moto', 'Otro'],
    ops: ['Venta'],
    pricePlaceholder: '15000',
    priceLabel: 'Precio (USD)',
  },
  empleos: {
    label: 'Empleos',
    subs: ['Tecnología', 'Ventas', 'Turismo', 'Administración', 'Otro'],
    ops: ['Tiempo completo', 'Medio tiempo', 'Por proyecto'],
    pricePlaceholder: '1000',
    priceLabel: 'Salario mensual (USD)',
  },
};

// ─── STYLES ───────────────────────────────────────────────────────────────────
const S = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Lora:ital,wght@0,500;1,400&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
:root{
  --ink:#1A1A2E;--ink2:#4A4A6A;--ink3:#9090AA;
  --bg:#F5F4F0;--white:#FFFFFF;--line:#E8E6E0;
  --blue:#2563EB;--blue-soft:#EEF4FF;
  --green:#059669;--green-soft:#ECFDF5;
  --amber:#D97706;--amber-soft:#FFFBEB;
  --red:#DC2626;
}
*{box-sizing:border-box;margin:0;padding:0;}html,body,#root{width:100%;min-height:100vh;}

/* NAV */
.nav{
  position:sticky;top:0;z-index:100;
  background:var(--white);border-bottom:1px solid var(--line);
  display:flex;align-items:center;justify-content:space-between;
  padding:0 2rem;height:60px;
}
.logo{font-family:'Lora',serif;font-size:1.35rem;font-weight:500;color:var(--ink);cursor:pointer;letter-spacing:-0.3px;}
.logo span{color:var(--blue);}
.logo em{font-style:italic;color:var(--ink2);}
.nav-links{display:flex;gap:0.25rem;}
.nav-link{padding:0.4rem 0.875rem;border-radius:6px;border:none;background:transparent;
  font-family:'Sora',sans-serif;font-size:0.825rem;font-weight:500;color:var(--ink2);cursor:pointer;transition:all 0.15s;}
.nav-link:hover{background:var(--bg);color:var(--ink);}
.nav-link.active{background:var(--ink);color:var(--white);}
.nav-btn{padding:0.45rem 1.1rem;border-radius:7px;border:none;background:var(--blue);
  color:var(--white);font-family:'Sora',sans-serif;font-size:0.825rem;font-weight:600;
  cursor:pointer;transition:all 0.15s;display:flex;align-items:center;gap:0.4rem;}
.nav-btn:hover{opacity:0.88;}

/* HERO */
.hero{background:var(--ink);padding:4rem 2rem 3.5rem;text-align:center;position:relative;overflow:hidden;}
.hero::after{content:'';position:absolute;bottom:-1px;left:0;right:0;height:40px;
  background:var(--bg);clip-path:ellipse(55% 100% at 50% 100%);}
.hero-eyebrow{display:inline-flex;align-items:center;gap:0.5rem;
  border:1px solid rgba(255,255,255,0.15);border-radius:100px;
  padding:0.3rem 0.875rem;font-size:0.7rem;font-weight:600;letter-spacing:1.5px;
  text-transform:uppercase;color:rgba(255,255,255,0.5);margin-bottom:1.5rem;}
.hero-eyebrow span{width:6px;height:6px;border-radius:50%;background:#22C55E;display:inline-block;}
.hero h1{font-family:'Lora',serif;font-size:clamp(2rem,4.5vw,3.2rem);font-weight:500;
  color:var(--white);line-height:1.2;margin-bottom:0.75rem;}
.hero h1 em{font-style:italic;color:#93C5FD;}
.hero-sub{color:rgba(255,255,255,0.5);font-size:0.95rem;max-width:480px;margin:0 auto 2.5rem;}

/* SEARCH BAR */
.search-bar{
  display:flex;max-width:680px;margin:0 auto;
  background:var(--white);border-radius:12px;overflow:hidden;
  box-shadow:0 8px 32px rgba(0,0,0,0.25);
}
.search-bar input{flex:1;border:none;outline:none;padding:0.9rem 1.25rem;
  font-family:'Sora',sans-serif;font-size:0.9rem;color:var(--ink);}
.search-bar select{border:none;border-left:1px solid var(--line);outline:none;
  padding:0.9rem 1rem;font-family:'Sora',sans-serif;font-size:0.825rem;
  color:var(--ink);background:var(--bg);cursor:pointer;}
.search-btn{padding:0.9rem 1.5rem;border:none;background:var(--blue);
  color:var(--white);font-family:'Sora',sans-serif;font-weight:600;font-size:0.875rem;
  cursor:pointer;transition:opacity 0.15s;white-space:nowrap;}
.search-btn:hover{opacity:0.88;}

/* HERO STATS */
.hero-stats{display:flex;justify-content:center;gap:3rem;margin-top:3rem;padding-bottom:1.5rem;}
.hstat-n{font-family:'Lora',serif;font-size:1.75rem;color:var(--white);font-style:italic;}
.hstat-l{font-size:0.7rem;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1.2px;margin-top:2px;}

/* CATEGORY TABS */
.cat-bar{background:var(--white);border-bottom:1px solid var(--line);
  padding:0 2rem;display:flex;align-items:center;gap:0.5rem;overflow-x:auto;}
.cat-tab{display:flex;align-items:center;gap:0.5rem;padding:1rem 1.25rem;
  border:none;background:transparent;font-family:'Sora',sans-serif;
  font-size:0.85rem;font-weight:500;color:var(--ink2);cursor:pointer;
  border-bottom:2px solid transparent;transition:all 0.15s;white-space:nowrap;}
.cat-tab:hover{color:var(--ink);}
.cat-tab.active{color:var(--blue);border-bottom-color:var(--blue);}
.cat-tab .cat-icon{font-size:1rem;}

/* FILTERS ROW */
.filters-row{padding:1rem 2rem;display:flex;gap:0.75rem;align-items:center;flex-wrap:wrap;}
.fpill{padding:0.35rem 0.875rem;border-radius:100px;border:1.5px solid var(--line);
  background:transparent;font-family:'Sora',sans-serif;font-size:0.775rem;font-weight:500;
  color:var(--ink2);cursor:pointer;transition:all 0.12s;}
.fpill:hover{border-color:var(--blue);color:var(--blue);}
.fpill.active{background:var(--ink);border-color:var(--ink);color:var(--white);}
.fsel{padding:0.35rem 0.875rem;border-radius:8px;border:1.5px solid var(--line);
  font-family:'Sora',sans-serif;font-size:0.775rem;color:var(--ink);
  background:var(--white);cursor:pointer;outline:none;}
.fcount{margin-left:auto;font-size:0.775rem;color:var(--ink3);}

/* GRID */
.grid-section{padding:1rem 2rem 3rem;}
.grid-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem;}
.grid-title{font-family:'Lora',serif;font-size:1.3rem;font-style:italic;}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:1.25rem;}

/* CARD */
.card{background:var(--white);border-radius:14px;overflow:hidden;
  border:1px solid var(--line);transition:all 0.2s;cursor:pointer;}
.card:hover{transform:translateY(-3px);box-shadow:0 12px 36px rgba(26,26,46,0.1);border-color:transparent;}
.card-img{height:190px;overflow:hidden;position:relative;}
.card-img img{width:100%;height:100%;object-fit:cover;transition:transform 0.35s;}
.card:hover .card-img img{transform:scale(1.05);}
.badge{position:absolute;top:0.65rem;left:0.65rem;padding:0.2rem 0.6rem;border-radius:5px;
  font-size:0.65rem;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;}
.badge-br{background:var(--blue);color:var(--white);}
.badge-veh{background:#7C3AED;color:var(--white);}
.badge-emp{background:var(--green);color:var(--white);}
.badge-feat{position:absolute;top:0.65rem;right:0.65rem;background:rgba(255,255,255,0.95);
  color:var(--amber);padding:0.2rem 0.5rem;border-radius:5px;font-size:0.65rem;font-weight:700;}
.card-body{padding:1.1rem;}
.card-price{font-family:'Lora',serif;font-size:1.3rem;font-style:italic;color:var(--blue);margin-bottom:0.2rem;}
.card-price sup{font-family:'Sora',sans-serif;font-style:normal;font-size:0.75rem;font-weight:600;}
.card-price sub{font-family:'Sora',sans-serif;font-style:normal;font-size:0.7rem;font-weight:400;color:var(--ink3);}
.card-title{font-size:0.875rem;font-weight:600;color:var(--ink);margin-bottom:0.3rem;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.card-meta{font-size:0.75rem;color:var(--ink3);display:flex;align-items:center;gap:0.35rem;}
.card-footer{padding:0.75rem 1.1rem;border-top:1px solid var(--line);
  display:flex;align-items:center;justify-content:space-between;}
.card-owner{font-size:0.75rem;color:var(--ink3);}
.card-date{font-size:0.7rem;color:var(--ink3);}

/* MODAL */
.overlay{position:fixed;inset:0;background:rgba(26,26,46,0.65);z-index:200;
  display:flex;align-items:center;justify-content:center;padding:1rem;backdrop-filter:blur(4px);}
.modal{background:var(--white);border-radius:18px;max-width:600px;width:100%;
  max-height:92vh;overflow-y:auto;position:relative;}
.modal-img{height:260px;overflow:hidden;border-radius:18px 18px 0 0;}
.modal-img img{width:100%;height:100%;object-fit:cover;}
.modal-body{padding:1.75rem;}
.modal-badges{display:flex;gap:0.5rem;margin-bottom:0.75rem;}
.modal-price{font-family:'Lora',serif;font-size:1.9rem;font-style:italic;color:var(--blue);margin-bottom:0.35rem;}
.modal-title{font-size:1.05rem;font-weight:600;margin-bottom:0.35rem;}
.modal-location{font-size:0.825rem;color:var(--ink3);margin-bottom:1.25rem;}
.modal-desc{font-size:0.875rem;color:var(--ink2);line-height:1.65;padding:1.1rem;
  background:var(--bg);border-radius:10px;margin-bottom:1.25rem;}
.modal-ctas{display:flex;gap:0.75rem;}
.btn-main{flex:1;padding:0.8rem;border-radius:9px;border:none;background:var(--blue);
  color:var(--white);font-family:'Sora',sans-serif;font-weight:600;font-size:0.875rem;cursor:pointer;transition:opacity 0.15s;}
.btn-main:hover{opacity:0.88;}
.btn-out{padding:0.8rem 1.1rem;border-radius:9px;border:1.5px solid var(--ink);
  background:transparent;color:var(--ink);font-family:'Sora',sans-serif;
  font-weight:600;font-size:0.875rem;cursor:pointer;transition:all 0.15s;}
.btn-out:hover{background:var(--ink);color:var(--white);}
.close-btn{position:absolute;top:0.875rem;right:0.875rem;width:32px;height:32px;
  border-radius:50%;border:none;background:rgba(255,255,255,0.9);
  display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1rem;z-index:5;}

/* PUBLISH FORM */
.form-wrap{max-width:680px;margin:0 auto;padding:2.5rem 2rem;}
.form-head{margin-bottom:2rem;}
.form-head h2{font-family:'Lora',serif;font-size:1.75rem;font-style:italic;margin-bottom:0.4rem;}
.form-head p{font-size:0.875rem;color:var(--ink2);}
.fsec{margin-bottom:1.75rem;}
.fsec-title{font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;
  color:var(--ink3);margin-bottom:0.875rem;padding-bottom:0.5rem;border-bottom:1px solid var(--line);}
.fgrid{display:grid;grid-template-columns:1fr 1fr;gap:0.875rem;}
.fgroup{display:flex;flex-direction:column;gap:0.35rem;}
.flabel{font-size:0.8rem;font-weight:500;color:var(--ink);}
.finput,.fselect,.ftextarea{
  padding:0.7rem 0.9rem;border-radius:9px;border:1.5px solid var(--line);
  font-family:'Sora',sans-serif;font-size:0.875rem;color:var(--ink);
  background:var(--white);outline:none;transition:border-color 0.15s;width:100%;}
.finput:focus,.fselect:focus,.ftextarea:focus{border-color:var(--blue);}
.ftextarea{resize:vertical;min-height:100px;}
.cat-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin-bottom:1rem;}
.cat-card{padding:1rem;border-radius:10px;border:1.5px solid var(--line);
  text-align:center;cursor:pointer;transition:all 0.15s;background:var(--white);}
.cat-card:hover{border-color:var(--blue);}
.cat-card.active{border-color:var(--blue);background:var(--blue-soft);}
.cat-card-icon{font-size:1.5rem;margin-bottom:0.35rem;}
.cat-card-label{font-size:0.775rem;font-weight:600;color:var(--ink2);}
.cat-card.active .cat-card-label{color:var(--blue);}
.upload-zone{border:2px dashed var(--line);border-radius:10px;padding:2rem;
  text-align:center;color:var(--ink3);cursor:pointer;transition:all 0.15s;}
.upload-zone:hover{border-color:var(--blue);color:var(--blue);}
.fsubmit{width:100%;padding:0.9rem;border-radius:10px;border:none;background:var(--ink);
  color:var(--white);font-family:'Sora',sans-serif;font-weight:700;font-size:0.95rem;
  cursor:pointer;transition:background 0.15s;margin-top:0.5rem;}
.fsubmit:hover{background:var(--blue);}
.success-box{background:var(--green-soft);border:1.5px solid #6EE7B7;border-radius:14px;
  padding:2.5rem;text-align:center;}
.success-box h3{font-family:'Lora',serif;font-size:1.5rem;font-style:italic;color:var(--green);margin-bottom:0.5rem;}
.success-box p{font-size:0.875rem;color:#047857;line-height:1.6;}

/* ADMIN */
.admin-wrap{display:grid;grid-template-columns:200px 1fr;min-height:calc(100vh - 60px);}
.sidebar{background:var(--ink);padding:1.5rem 1rem;}
.sidebar-section{font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;
  color:rgba(255,255,255,0.3);margin:1.5rem 0 0.5rem;padding-left:0.5rem;}
.slink{display:flex;align-items:center;gap:0.65rem;padding:0.6rem 0.75rem;border-radius:7px;
  font-size:0.825rem;font-weight:500;color:rgba(255,255,255,0.55);cursor:pointer;
  transition:all 0.12s;border:none;background:transparent;width:100%;text-align:left;}
.slink:hover{background:rgba(255,255,255,0.07);color:var(--white);}
.slink.active{background:var(--blue);color:var(--white);}
.admin-main{padding:2rem;overflow-y:auto;background:var(--bg);}
.admin-head{margin-bottom:1.75rem;}
.admin-head h2{font-family:'Lora',serif;font-size:1.5rem;font-style:italic;}
.admin-head p{font-size:0.825rem;color:var(--ink2);margin-top:0.2rem;}
.kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-bottom:1.75rem;}
.kpi{background:var(--white);border-radius:12px;padding:1.25rem;border:1px solid var(--line);}
.kpi-l{font-size:0.7rem;text-transform:uppercase;letter-spacing:1px;color:var(--ink3);margin-bottom:0.5rem;}
.kpi-v{font-family:'Lora',serif;font-size:1.9rem;font-style:italic;color:var(--ink);}
.kpi-d{font-size:0.75rem;color:var(--green);margin-top:0.2rem;}
.table-wrap{background:var(--white);border-radius:12px;border:1px solid var(--line);overflow:hidden;}
.atbl{width:100%;border-collapse:collapse;}
.atbl th{padding:0.75rem 1rem;text-align:left;font-size:0.7rem;text-transform:uppercase;
  letter-spacing:1px;color:var(--ink3);border-bottom:1px solid var(--line);background:var(--bg);}
.atbl td{padding:0.9rem 1rem;font-size:0.825rem;border-bottom:1px solid var(--line);vertical-align:middle;}
.atbl tr:last-child td{border-bottom:none;}
.atbl tr:hover td{background:#FAFAF8;}
.status{display:inline-flex;align-items:center;gap:0.35rem;font-size:0.775rem;}
.dot{width:7px;height:7px;border-radius:50%;}
.dot-active{background:var(--green);}
.dot-paused{background:var(--amber);}
.act-btn{padding:0.3rem 0.65rem;border-radius:5px;border:1px solid var(--line);
  background:transparent;font-size:0.72rem;cursor:pointer;color:var(--ink3);transition:all 0.12s;}
.act-btn:hover{border-color:var(--red);color:var(--red);}
.cat-pill{display:inline-block;padding:0.2rem 0.6rem;border-radius:100px;font-size:0.7rem;font-weight:600;}
.cpill-br{background:var(--blue-soft);color:var(--blue);}
.cpill-veh{background:#F3E8FF;color:#7C3AED;}
.cpill-emp{background:var(--green-soft);color:var(--green);}
`;

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const catBadgeClass = (c) =>
  c === 'bienes-raices'
    ? 'badge-br'
    : c === 'vehiculos'
    ? 'badge-veh'
    : 'badge-emp';
const catLabel = (c) =>
  c === 'bienes-raices'
    ? 'Bienes Raíces'
    : c === 'vehiculos'
    ? 'Vehículos'
    : 'Empleos';
const pillClass = (c) =>
  c === 'bienes-raices'
    ? 'cpill-br'
    : c === 'vehiculos'
    ? 'cpill-veh'
    : 'cpill-emp';

const fmtPrice = (p, cur, op) => {
  const n =
    p >= 1000
      ? `${(p / 1000).toFixed(p % 1000 === 0 ? 0 : 1)}K`
      : p.toLocaleString();
  const suffix =
    op === 'Alquiler'
      ? '/mes'
      : op === 'Medio tiempo' || op === 'Tiempo completo'
      ? '/mes'
      : '';
  return { n, suffix, cur };
};

// ─── VIEWS ────────────────────────────────────────────────────────────────────
const Card = ({ l, onClick }) => {
  const { n, suffix } = fmtPrice(l.price, l.currency, l.op);
  return (
    <div className="card" onClick={() => onClick(l)}>
      <div className="card-img">
        <img src={l.img} alt={l.title} loading="lazy" />
        <span className={`badge ${catBadgeClass(l.cat)}`}>{l.sub}</span>
        {l.featured && <span className="badge-feat">★ Dest.</span>}
      </div>
      <div className="card-body">
        <div className="card-price">
          <sup>$</sup>
          {n}
          <sub>
            {' '}
            {l.currency}
            {suffix}
          </sub>
        </div>
        <div className="card-title">{l.title}</div>
        <div className="card-meta">
          📍 {l.canton}, {l.province}
        </div>
      </div>
      <div className="card-footer">
        <span className="card-owner">{l.owner}</span>
        <span className="card-date">{l.date}</span>
      </div>
    </div>
  );
};

const Modal = ({ l, onClose }) => {
  const { n, suffix } = fmtPrice(l.price, l.currency, l.op);
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        <div className="modal-img">
          <img src={l.img} alt={l.title} />
        </div>
        <div className="modal-body">
          <div className="modal-badges">
            <span
              className={`badge ${catBadgeClass(l.cat)}`}
              style={{ position: 'static' }}
            >
              {l.sub}
            </span>
            <span
              className={`badge`}
              style={{
                position: 'static',
                background: 'var(--bg)',
                color: 'var(--ink2)',
              }}
            >
              {l.op}
            </span>
          </div>
          <div className="modal-price">
            <sup
              style={{
                fontFamily: 'Sora',
                fontStyle: 'normal',
                fontSize: '1rem',
              }}
            >
              $
            </sup>
            {n}
            <sub
              style={{
                fontFamily: 'Sora',
                fontStyle: 'normal',
                fontSize: '0.8rem',
              }}
            >
              {' '}
              {l.currency}
              {suffix}
            </sub>
          </div>
          <div className="modal-title">{l.title}</div>
          <div className="modal-location">
            📍 {l.canton}, {l.province} · Publicado por {l.owner} · {l.date}
          </div>
          <div className="modal-desc">{l.detail}</div>
          <div className="modal-ctas">
            <button className="btn-main">📞 Llamar — {l.phone}</button>
            <button className="btn-out">WhatsApp</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeView = ({ onNav }) => {
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('todos');
  const [prov, setProv] = useState('Todas');
  const [op, setOp] = useState('todos');
  const [selected, setSelected] = useState(null);

  const filtered = LISTINGS.filter((l) => {
    const q = search.toLowerCase();
    const matchQ =
      !q ||
      l.title.toLowerCase().includes(q) ||
      l.canton.toLowerCase().includes(q) ||
      l.province.toLowerCase().includes(q);
    const matchC = cat === 'todos' || l.cat === cat;
    const matchP = prov === 'Todas' || l.province === prov;
    const matchO = op === 'todos' || l.op === op;
    return matchQ && matchC && matchP && matchO;
  });

  const ops =
    cat === 'bienes-raices'
      ? ['todos', 'Venta', 'Alquiler']
      : cat === 'empleos'
      ? ['todos', 'Tiempo completo', 'Medio tiempo', 'Por proyecto']
      : cat === 'vehiculos'
      ? ['todos', 'Venta']
      : ['todos'];

  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">
          <span />
          Plataforma de clasificados · Costa Rica
        </div>
        <h1>
          Anuncia lo que tienes.
          <br />
          <em>Encuentra lo que buscas.</em>
        </h1>
        <p className="hero-sub">
          Bienes raíces, vehículos y empleos. Todo en un solo lugar, ordenado y
          fácil.
        </p>
        <div className="search-bar">
          <input
            placeholder="¿Qué estás buscando?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={prov} onChange={(e) => setProv(e.target.value)}>
            {PROVINCES.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
          <button className="search-btn">Buscar</button>
        </div>
        <div className="hero-stats">
          <div>
            <div className="hstat-n">1,200+</div>
            <div className="hstat-l">Anuncios</div>
          </div>
          <div>
            <div className="hstat-n">7</div>
            <div className="hstat-l">Provincias</div>
          </div>
          <div>
            <div className="hstat-n">3</div>
            <div className="hstat-l">Categorías</div>
          </div>
        </div>
      </div>

      <div className="cat-bar">
        {CATS.map((c) => (
          <button
            key={c.id}
            className={`cat-tab ${cat === c.id ? 'active' : ''}`}
            onClick={() => {
              setCat(c.id);
              setOp('todos');
            }}
          >
            <span className="cat-icon">{c.icon}</span>
            {c.label}
          </button>
        ))}
      </div>

      <div className="filters-row">
        {ops.map((o) => (
          <button
            key={o}
            className={`fpill ${op === o ? 'active' : ''}`}
            onClick={() => setOp(o)}
          >
            {o === 'todos' ? 'Todos' : o}
          </button>
        ))}
        <select
          className="fsel"
          value={prov}
          onChange={(e) => setProv(e.target.value)}
        >
          {PROVINCES.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
        <span className="fcount">{filtered.length} anuncios</span>
      </div>

      <div className="grid-section">
        <div className="grid-header">
          <h2 className="grid-title">
            {cat === 'todos'
              ? 'Todos los anuncios'
              : CATS.find((c) => c.id === cat)?.label}
          </h2>
          <span style={{ fontSize: '0.8rem', color: 'var(--ink3)' }}>
            {filtered.length} resultado{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
        {filtered.length > 0 ? (
          <div className="grid">
            {filtered.map((l) => (
              <Card key={l.id} l={l} onClick={setSelected} />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem',
              color: 'var(--ink3)',
            }}
          >
            No hay anuncios con esos filtros.
          </div>
        )}
      </div>

      {selected && <Modal l={selected} onClose={() => setSelected(null)} />}
    </>
  );
};

const PublishView = ({ onNav }) => {
  const [cat, setCat] = useState('');
  const [form, setForm] = useState({
    sub: '',
    op: '',
    title: '',
    price: '',
    province: 'San José',
    canton: '',
    desc: '',
    phone: '',
    email: '',
  });
  const [done, setDone] = useState(false);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const cfg = cat ? FORM_CATS[cat] : null;

  if (done)
    return (
      <div className="form-wrap">
        <div className="success-box">
          <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>✅</div>
          <h3>¡Anuncio publicado!</h3>
          <p>
            Tu anuncio ya está visible en Anunciacr.com.
            <br />
            Los interesados te contactarán directamente por teléfono o WhatsApp.
          </p>
          <button
            className="btn-main"
            style={{
              maxWidth: 240,
              margin: '1.5rem auto 0',
              display: 'flex',
              justifyContent: 'center',
            }}
            onClick={() => {
              setDone(false);
              onNav('home');
            }}
          >
            Ver anuncios →
          </button>
        </div>
      </div>
    );

  return (
    <div className="form-wrap">
      <div className="form-head">
        <h2>Publicar anuncio</h2>
        <p>
          Gratis. Sin comisiones. Tu anuncio llega a miles de personas en Costa
          Rica.
        </p>
      </div>

      <div className="fsec">
        <div className="fsec-title">¿Qué vas a anunciar?</div>
        <div className="cat-cards">
          {Object.entries(FORM_CATS).map(([id, c]) => (
            <div
              key={id}
              className={`cat-card ${cat === id ? 'active' : ''}`}
              onClick={() => {
                setCat(id);
                set('sub', '');
                set('op', '');
              }}
            >
              <div className="cat-card-icon">
                {id === 'bienes-raices' ? '⌂' : id === 'vehiculos' ? '◉' : '◆'}
              </div>
              <div className="cat-card-label">{c.label}</div>
            </div>
          ))}
        </div>
      </div>

      {cfg && (
        <>
          <div className="fsec">
            <div className="fsec-title">Detalles del anuncio</div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
              }}
            >
              <div className="fgrid">
                <div className="fgroup">
                  <label className="flabel">Tipo</label>
                  <select
                    className="fselect"
                    value={form.sub}
                    onChange={(e) => set('sub', e.target.value)}
                  >
                    <option value="">Seleccionar...</option>
                    {cfg.subs.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="fgroup">
                  <label className="flabel">Operación</label>
                  <select
                    className="fselect"
                    value={form.op}
                    onChange={(e) => set('op', e.target.value)}
                  >
                    <option value="">Seleccionar...</option>
                    {cfg.ops.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="fgroup">
                <label className="flabel">Título del anuncio</label>
                <input
                  className="finput"
                  placeholder={`Ej: ${cfg.subs[0]} en San José...`}
                  value={form.title}
                  onChange={(e) => set('title', e.target.value)}
                />
              </div>
              <div className="fgrid">
                <div className="fgroup">
                  <label className="flabel">{cfg.priceLabel}</label>
                  <input
                    className="finput"
                    type="number"
                    placeholder={cfg.pricePlaceholder}
                    value={form.price}
                    onChange={(e) => set('price', e.target.value)}
                  />
                </div>
                <div className="fgroup">
                  <label className="flabel">Provincia</label>
                  <select
                    className="fselect"
                    value={form.province}
                    onChange={(e) => set('province', e.target.value)}
                  >
                    {PROVINCES.slice(1).map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="fgroup">
                <label className="flabel">Cantón / Zona</label>
                <input
                  className="finput"
                  placeholder="Ej: Escazú, Rohrmoser, Liberia..."
                  value={form.canton}
                  onChange={(e) => set('canton', e.target.value)}
                />
              </div>
              <div className="fgroup">
                <label className="flabel">Descripción</label>
                <textarea
                  className="ftextarea"
                  placeholder="Describe los detalles más importantes del anuncio..."
                  value={form.desc}
                  onChange={(e) => set('desc', e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="fsec">
            <div className="fsec-title">Fotos</div>
            <div className="upload-zone">
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                ↑
              </div>
              <div style={{ fontWeight: 500, fontSize: '0.875rem' }}>
                Subir fotos
              </div>
              <div style={{ fontSize: '0.775rem', marginTop: '0.25rem' }}>
                JPG, PNG · hasta 10 fotos
              </div>
            </div>
          </div>

          <div className="fsec">
            <div className="fsec-title">Datos de contacto</div>
            <div className="fgrid">
              <div className="fgroup">
                <label className="flabel">Teléfono / WhatsApp</label>
                <input
                  className="finput"
                  placeholder="+506 8888-0000"
                  value={form.phone}
                  onChange={(e) => set('phone', e.target.value)}
                />
              </div>
              <div className="fgroup">
                <label className="flabel">Correo electrónico</label>
                <input
                  className="finput"
                  type="email"
                  placeholder="tu@correo.com"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                />
              </div>
            </div>
          </div>

          <button
            className="fsubmit"
            onClick={() => form.title && form.price && setDone(true)}
          >
            Publicar anuncio gratis
          </button>
          <p
            style={{
              textAlign: 'center',
              fontSize: '0.75rem',
              color: 'var(--ink3)',
              marginTop: '0.75rem',
            }}
          >
            Al publicar aceptás los Términos de Uso. Publicación básica
            gratuita.
          </p>
        </>
      )}
    </div>
  );
};

const AdminView = () => {
  const total = LISTINGS.length;
  const br = LISTINGS.filter((l) => l.cat === 'bienes-raices').length;
  const veh = LISTINGS.filter((l) => l.cat === 'vehiculos').length;
  const emp = LISTINGS.filter((l) => l.cat === 'empleos').length;

  return (
    <div className="admin-wrap">
      <div className="sidebar">
        <div
          style={{
            color: 'rgba(255,255,255,0.3)',
            fontSize: '0.65rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            paddingLeft: '0.5rem',
          }}
        >
          Anunciacr
        </div>
        <div className="sidebar-section">Plataforma</div>
        {[
          ['📊', 'Dashboard'],
          ['📋', 'Anuncios'],
          ['👥', 'Usuarios'],
        ].map(([ic, lb]) => (
          <button
            key={lb}
            className={`slink ${lb === 'Dashboard' ? 'active' : ''}`}
          >
            {ic} {lb}
          </button>
        ))}
      </div>
      <div className="admin-main">
        <div className="admin-head">
          <h2>Dashboard</h2>
          <p>Resumen de actividad — Anunciacr.com</p>
        </div>
        <div className="kpis">
          <div className="kpi">
            <div className="kpi-l">Total anuncios</div>
            <div className="kpi-v">{total}</div>
            <div className="kpi-d">↑ +4 esta semana</div>
          </div>
          <div className="kpi">
            <div className="kpi-l">Bienes Raíces</div>
            <div className="kpi-v">{br}</div>
            <div className="kpi-d">
              {Math.round((br / total) * 100)}% del total
            </div>
          </div>
          <div className="kpi">
            <div className="kpi-l">Vehículos</div>
            <div className="kpi-v">{veh}</div>
            <div className="kpi-d">
              {Math.round((veh / total) * 100)}% del total
            </div>
          </div>
          <div className="kpi">
            <div className="kpi-l">Empleos</div>
            <div className="kpi-v">{emp}</div>
            <div className="kpi-d">
              {Math.round((emp / total) * 100)}% del total
            </div>
          </div>
        </div>
        <div
          style={{
            fontWeight: 600,
            marginBottom: '0.875rem',
            fontSize: '0.9rem',
          }}
        >
          Anuncios recientes
        </div>
        <div className="table-wrap">
          <table className="atbl">
            <thead>
              <tr>
                <th>Anuncio</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Provincia</th>
                <th>Estado</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {LISTINGS.map((l) => (
                <tr key={l.id}>
                  <td>
                    <div style={{ fontWeight: 500 }}>{l.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--ink3)' }}>
                      {l.owner}
                    </div>
                  </td>
                  <td>
                    <span className={`cat-pill ${pillClass(l.cat)}`}>
                      {catLabel(l.cat)}
                    </span>
                  </td>
                  <td style={{ fontWeight: 600 }}>
                    ${l.price.toLocaleString()}
                  </td>
                  <td style={{ color: 'var(--ink2)' }}>{l.province}</td>
                  <td>
                    <span className="status">
                      <span
                        className={`dot ${
                          l.featured ? 'dot-active' : 'dot-paused'
                        }`}
                      />
                      {l.featured ? 'Destacado' : 'Activo'}
                    </span>
                  </td>
                  <td>
                    <button className="act-btn">✕</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [view, setView] = useState('home');
  return (
    <>
      <style>{S}</style>
      <nav className="nav">
        <div className="logo" onClick={() => setView('home')}>
          Anuncia<span>cr</span>
          <em>.com</em>
        </div>
        <div className="nav-links">
          <button
            className={`nav-link ${view === 'home' ? 'active' : ''}`}
            onClick={() => setView('home')}
          >
            Explorar
          </button>
          <button
            className={`nav-link ${view === 'admin' ? 'active' : ''}`}
            onClick={() => setView('admin')}
          >
            Admin
          </button>
        </div>
        <button className="nav-btn" onClick={() => setView('publish')}>
          + Publicar gratis
        </button>
      </nav>
      {view === 'home' && <HomeView onNav={setView} />}
      {view === 'publish' && <PublishView onNav={setView} />}
      {view === 'admin' && <AdminView />}
    </>
  );
}
