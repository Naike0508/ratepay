interface Azienda {
  id: string;
  nome: string;
  partitaIva: string;
}

interface Rateizzazione {
  id: string;
  aziendaId: string;
  descrizione: string;
  importoTotale: number;
  importoRata: number;
  dataInizio: Date;
  dataFine: Date;
  cadenza: 'mensile' | 'trimestrale' | 'semestrale' | 'annuale';
  tipo: 'IVA' | 'INPS' | 'ADE' | 'COMUNE' | 'REGIONE' | 'ALTRO';
  stato: 'attiva' | 'completata' | 'in_ritardo';
}

interface Rata {
  id: string;
  rateizzazioneId: string;
  numero: number;
  importo: number;
  dataPagamento: Date;
  metodoPagamento: 'bonifico' | 'assegno' | 'bancomat' | 'altro';
  banca?: string;
  stato: 'pagata' | 'da_pagare' | 'scaduta';
}