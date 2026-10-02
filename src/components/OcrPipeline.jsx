import React, { useState } from 'react';
import TiltCard from './TiltCard';
import { 
  FileText, 
  Scan, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Database, 
  ShieldCheck, 
  Layers, 
  Zap, 
  RefreshCw, 
  Check, 
  Table, 
  Cpu 
} from 'lucide-react';

const SAMPLE_DOCS = [
  {
    id: 'invoice',
    name: 'Vendor Invoice (#INV-8492)',
    category: 'Accounts Payable',
    fileName: 'Apex_Industrial_Invoice_8492.pdf',
    confidence: '99.8%',
    processingTime: '0.82s',
    fields: [
      { label: 'Vendor Name', value: 'Apex Industrial Logistics LLC', confidence: '99.9%' },
      { label: 'Invoice Number', value: 'INV-84920-X', confidence: '100%' },
      { label: 'Issue Date', value: 'Oct 12, 2026', confidence: '99.7%' },
      { label: 'Due Date', value: 'Nov 12, 2026', confidence: '99.8%' },
      { label: 'Tax ID / EIN', value: 'XX-XXX8492', confidence: '99.5%' },
      { label: 'Line Item 1', value: 'Autonomous Fleet Maintenance (x4)', confidence: '99.6%' },
      { label: 'Line Item 2', value: 'Sensor Calibration & Telemetry', confidence: '99.4%' },
      { label: 'Subtotal', value: '$12,400.00', confidence: '100%' },
      { label: 'Tax (8.25%)', value: '$1,023.00', confidence: '100%' },
      { label: 'Total Due', value: '$13,423.00', confidence: '100%' }
    ],
    destinations: ['QuickBooks Online', 'HubSpot CRM', 'PostgreSQL Data Warehouse', 'Slack #finance-alerts']
  },
  {
    id: 'contract',
    name: 'Commercial Lease Agreement',
    category: 'Legal & Real Estate',
    fileName: 'Lease_Agreement_Suite_400.pdf',
    confidence: '99.6%',
    processingTime: '1.14s',
    fields: [
      { label: 'Lessor / Landlord', value: 'Crestview Commercial Realty', confidence: '99.8%' },
      { label: 'Tenant / Lessee', value: 'Nexus Systems Global Inc.', confidence: '99.9%' },
      { label: 'Premises Address', value: '740 E Houston St, Suite 400', confidence: '99.5%' },
      { label: 'Term Duration', value: '36 Months (3 Years)', confidence: '99.7%' },
      { label: 'Commencement', value: 'Jan 01, 2027', confidence: '99.6%' },
      { label: 'Monthly Base Rent', value: '$8,750.00 / mo', confidence: '99.9%' },
      { label: 'Security Deposit', value: '$17,500.00', confidence: '100%' },
      { label: 'Escalation Clause', value: '3.0% Annual CPI Cap', confidence: '99.2%' }
    ],
    destinations: ['Real Estate CRM', 'DocuSign Archive', 'Google Drive Vault', 'Legal Task Dispatcher']
  },
  {
    id: 'receipt',
    name: 'Logistics Bill of Lading (BOL)',
    category: 'Supply Chain & Freight',
    fileName: 'Freight_BOL_Manifest_3910.pdf',
    confidence: '99.7%',
    processingTime: '0.65s',
    fields: [
      { label: 'Carrier', value: 'Lone Star Express Hauling', confidence: '99.8%' },
      { label: 'Origin Depot', value: 'San Antonio Distribution Center Hub', confidence: '99.6%' },
      { label: 'Destination', value: 'Austin Fulfillment Terminal #2', confidence: '99.9%' },
      { label: 'Weight / Pallets', value: '18,400 lbs / 22 Pallets', confidence: '99.5%' },
      { label: 'Seal Verification', value: 'SEAL-#849102-MATCHED', confidence: '100%' },
      { label: 'Driver Sign-off', value: 'Verified Digitally via AI OCR', confidence: '99.4%' }
    ],
    destinations: ['ERP Fleet Portal', 'Inventory Database', 'Customer Tracking Portal', 'WhatsApp Dispatch Alert']
  }
];

export default function OcrPipeline({ onOpenContact }) {
  const [activeDocIndex, setActiveDocIndex] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState('ready'); // 'ready' | 'scanning' | 'extracted'

  const currentDoc = SAMPLE_DOCS[activeDocIndex];

  const handleTriggerScan = (index) => {
    setActiveDocIndex(index);
    setIsScanning(true);
    setScanStep('scanning');

    setTimeout(() => {
      setIsScanning(false);
      setScanStep('extracted');
    }, 900);
  };

  return (
    <section id="ocr-pipeline" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#C9DFFF]/70 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-[radial-gradient(circle,rgba(8,120,254,0.06)_0%,transparent_70%)] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3FF] border border-[#C9DFFF] text-[#0878FE] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Scan className="w-3.5 h-3.5" />
            <span>Intelligent Document Automation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight leading-tight mb-4">
            AI OCR & Document <span className="text-[#0878FE]">Processing Pipelines.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Eliminate hours of manual data entry. We engineer intelligent OCR pipelines that extract, validate, and route unstructured invoices, contracts, receipts, and PDFs directly into your ERP, CRM, and accounting software with 99.4%+ accuracy.
          </p>
        </div>

        {/* Document Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {SAMPLE_DOCS.map((doc, idx) => (
            <button
              key={doc.id}
              onClick={() => handleTriggerScan(idx)}
              className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 border ${
                activeDocIndex === idx
                  ? 'bg-[#0878FE] text-white border-[#0878FE] shadow-sm scale-105'
                  : 'bg-[#F8FAFE] text-slate-700 hover:bg-[#EAF3FF] border-[#C9DFFF]'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>{doc.name}</span>
            </button>
          ))}
        </div>

        {/* Main Pipeline Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual Document Scanner (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <TiltCard glare={true} maxRotation={2} className="h-full">
              <div className="bg-[#F8FAFE] rounded-3xl p-6 sm:p-7 border border-[#C9DFFF] shadow-card flex flex-col justify-between h-full relative overflow-hidden">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between border-b border-[#C9DFFF] pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-mono text-xs font-bold text-slate-800">{currentDoc.fileName}</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                    Confidence: {currentDoc.confidence}
                  </span>
                </div>

                {/* Simulated Document Canvas with Laser Scan Line */}
                <div className="relative bg-white rounded-2xl p-5 border border-[#C9DFFF] shadow-inner font-mono text-xs space-y-3.5 my-auto overflow-hidden">
                  
                  {/* Laser Sweeper Animation */}
                  {isScanning && (
                    <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#0878FE] to-transparent shadow-[0_0_15px_#0878FE] animate-[scanLaser_0.9s_ease-in-out_infinite] z-20"></div>
                  )}

                  {/* Document Header Representation */}
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[#EAF3FF] text-[#0878FE] flex items-center justify-center font-bold text-[10px]">
                        AI
                      </div>
                      <span className="font-bold text-[#111827] text-xs uppercase">{currentDoc.category}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">OCR Latency: {currentDoc.processingTime}</span>
                  </div>

                  {/* Highlighted Bounding Box Segments */}
                  <div className="space-y-2">
                    <div className="p-2 rounded bg-[#EAF3FF]/60 border border-[#0878FE]/40 relative">
                      <span className="text-[9px] font-bold text-[#0878FE] uppercase block tracking-wider">
                        [Detected Entity: Principal]
                      </span>
                      <p className="text-slate-900 font-semibold text-xs mt-0.5 truncate">
                        {currentDoc.fields[0].value}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 rounded bg-[#EAF3FF]/40 border border-[#0878FE]/30">
                        <span className="text-[9px] font-bold text-[#0878FE] uppercase block">
                          [Record ID]
                        </span>
                        <p className="text-slate-800 text-[11px] font-semibold mt-0.5 truncate">
                          {currentDoc.fields[1].value}
                        </p>
                      </div>

                      <div className="p-2 rounded bg-emerald-50 border border-emerald-300">
                        <span className="text-[9px] font-bold text-emerald-700 uppercase block">
                          [Primary Metric]
                        </span>
                        <p className="text-emerald-900 text-[11px] font-bold mt-0.5 truncate">
                          {currentDoc.fields[currentDoc.fields.length - 1].value}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Extracted Footer Notice */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                    <span>Model: Vision Transformer + LayoutLMv3</span>
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <Check className="w-3 h-3" /> Validated
                    </span>
                  </div>

                </div>

                {/* Scan Action Controller */}
                <div className="pt-5 mt-5 border-t border-[#C9DFFF] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleTriggerScan(activeDocIndex)}
                    disabled={isScanning}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-[#0878FE] bg-[#EAF3FF] hover:bg-[#0878FE] hover:text-white transition-all border border-[#C9DFFF]"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
                    <span>{isScanning ? 'Extracting Data...' : 'Re-Run Pipeline'}</span>
                  </button>

                  <span className="text-xs font-mono text-slate-500">
                    Speed: <strong>{currentDoc.processingTime}</strong>
                  </span>
                </div>

              </div>
            </TiltCard>
          </div>

          {/* Right Column: Extracted Structured Data & Cloud Destinations (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Extracted Data Table Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#C9DFFF] shadow-card flex-1">
              <div className="flex items-center justify-between border-b border-[#C9DFFF] pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <Table className="w-4 h-4 text-[#0878FE]" />
                  <h3 className="font-bold text-base text-[#111827]">
                    Parsed Key-Value Schema Output
                  </h3>
                </div>
                <span className="text-[11px] font-mono font-bold text-slate-500 bg-[#F8FAFE] px-2.5 py-0.5 rounded-full border border-[#C9DFFF]">
                  JSON / Database Ready
                </span>
              </div>

              {/* Parsed Fields Grid */}
              <div className="grid sm:grid-cols-2 gap-3 max-h-[290px] overflow-y-auto pr-1">
                {currentDoc.fields.map((field, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-xl bg-[#F8FAFE] border border-[#C9DFFF] hover:border-[#0878FE] transition-colors"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                        {field.label}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                        {field.confidence}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-[#111827] truncate">
                      {field.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Automatic System Sync Destinations */}
              <div className="mt-5 pt-4 border-t border-[#C9DFFF]">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2.5">
                  Automated Downstream Sync Destinations:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentDoc.destinations.map((dest, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-[#EAF3FF] text-[#0878FE] border border-[#C9DFFF]"
                    >
                      <Database className="w-3 h-3 text-[#0878FE]" />
                      <span>{dest}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Value Banner */}
            <div className="bg-gradient-to-r from-[#0878FE] to-[#0255FD] rounded-2xl p-5 text-white shadow-glow flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-0.5 text-center sm:text-left">
                <span className="text-xs uppercase tracking-wider font-bold text-cyan-200">
                  Business ROI Impact
                </span>
                <p className="text-sm sm:text-base font-bold text-white">
                  Reduces invoice & document processing costs by up to <strong>85%</strong>.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (onOpenContact) {
                    onOpenContact();
                  } else {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white text-[#0878FE] hover:bg-cyan-50 shadow-sm transition-all shrink-0 flex items-center gap-1.5"
              >
                <span>Automate Your Documents</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
