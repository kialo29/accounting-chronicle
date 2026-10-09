import math
def sdlt(c):
    t=0
    if c>150000: t+=(min(c,250000)-150000)*0.02
    if c>250000: t+=(c-250000)*0.05
    return t
def sd(c): return math.ceil(c*0.005/5)*5
ok=lambda a,b: abs(a-b)<0.01
checks=[]
def chk(name,a,b): checks.append((name,ok(a,b),a,b))
# revenue
chk('GY1 revenue',630+330+110+48+60+2,1180)
# stamp
chk('Calder SD',sd(32e6),160000); chk('BSL SD',sd(22.2e6),111000); chk('HEL SD',sd(16e6),80000)
# R22: Brennock's stamp duty is charged on cash + the earn-out cap (contingency principle, STSM021120); old check sd(48e6)=240000 kept only as the cash component
chk('TAL SD cash component',sd(48e6),240000); chk('TAL SD (R22)',sd(54e6),270000); chk('RH SD',sd(4.5e6),22500)
# SDLT
chk('CVE works',sdlt(5.6e6),269500); chk('TWS factory',sdlt(6.0e6),289500); chk('TAL factory',sdlt(7.5e6),364500); chk('HQ',sdlt(14e6),689500)
# Calder RDEC
chk('RDEC',0.2*2.0e6,400000); chk('Calder CT',0.25*3.0e6-400000,350000)
chk('Dan R&D cost',0.6*120000,72000); chk('BSL subcontract 65%',0.65*400000,260000)
# BSL ERIS
chk('ERIS extra',0.86*3.5e6,3010000); chk('enh loss',4.2e6+3.01e6,7210000); chk('cap',1.86*3.5e6,6510000); chk('credit',0.145*6.51e6,943950); chk('c/f',7.21e6-6.51e6,700000)
chk('BSL RDEC',0.2*3.0e6,600000); chk('after notional',600000*0.81,486000)
chk('BSL pre-change losses',5.3e6+0.7e6+2.6e6,8.6e6)
# deemed release
chk('release',3.0e6-1.8e6,1.2e6)
# CIR
te1=50+12+13+3.3+3.0-0.6-5.9; te2=54+12.5+13.5+4.7+3.2-0.6-6.3-2.6; te3=58+13+14.8+8.6+3.4-0.6-6.0-3.5
chk('te1',te1,74.8); chk('te2',te2,78.4); chk('te3',te3,87.7)
an1=30.25-7.2+1.35+0.25; an2=30.25-7.2+1.8+0.72+0.25; an3=30.25-7.2+1.2+0.1+0.09  # R20: TEL's GY3 LFL finance charge £0.09m is tax-interest (was 24.35)
chk('antie1',an1,24.65); chk('antie2',an2,25.82); chk('antie3 (R20)',an3,24.44)
chk('dis1',an1-0.3*te1,2.21); chk('dis2',an2-0.3*te2,2.30); chk('react3 as filed (R20; was 1.96)',0.3*te3-an3,1.87); chk('cf3 as filed (R20; was 2.55)',2.21+2.30-1.87,2.64)
chk('cve gy2',3/12*4.4+9/12*4.8,4.7); chk('cve gy3',3/12*4.8+3.2+6.0-1.8,8.6)
chk('angie1',30.25+1.6,31.85); chk('angie2',30.25+2.77,33.02); chk('angie3 (R20; was 31.55)',30.25+1.3+0.09,31.64)
# TEL
chk('TEL GY1 before',50-14-12,24.0)
# R3 (continuity rulings): TPLC's ME surrender capped at the excess over the s 105(3A) profit-related threshold
# (gross profits + TCM's CFC apportionment 825k). Old checks TEL GY1 TTP 9.71 / CT 2.4275 and GY2 TTP 8.08 / CT 2.02 / GR 17.92 replaced.
cfc_app=0.25*(60*0.06-0.3); chk('TCM apportioned GY1-4 (£m)',cfc_app,0.825)
chk('TPLC GY1 excess ME over gross profits',8.0-2.1,5.9); chk('TPLC GY1 threshold',2.1+cfc_app,2.925); chk('TPLC GY1 ME surrender',8.0-2.1-cfc_app,5.075)
chk('TPLC GY1 NTLR',7.2+1.6-2.21,6.59); chk('TPLC GY1 total to TEL',5.075+6.59,11.665)
chk('TEL GY1 TTP',24-5.075-6.59-1.8,10.535); chk('TEL GY1 CT',0.25*10.535,2.63375)
chk('TEL GY2 TP',42.0-16.0,26.0); chk('TPLC GY2 NTLR',7.2+2.77-2.30,7.67)
chk('TPLC GY2 threshold',2.2+cfc_app,3.025); chk('TPLC GY2 ME surrender',8.5-2.2-cfc_app,5.475)
chk('TEL group relief GY2',5.475+7.67+2.6+1.35,17.095); chk('TEL GY2 TTP',26.0-17.095,8.905); chk('TEL GY2 CT',0.25*8.905,2.22625)
chk('TEL GY2 QIP due',2.22625/4,0.5565625); chk('TEL GY2 paid (short 0.4)',2.22625-0.4,1.82625); chk('TEL GY2 paid each',1.82625/4,0.4565625)
chk('TEL GY2 net after RDEC',2.22625-0.6,1.62625); chk('TPLC stranded ME end GY4',4*cfc_app,3.3)
chk('TES refund surrender: repaid',569375-400000,169375); chk('TES overpaid',0.25*2277500,569375)
chk('Group GY2 tax charge £000',25000-1500-528+132+500+575+0.25*825,24385.25); chk('Group GY2 TCM rate line',3300*(0.25-0.09),528)
# R1/R2: QIP divisors counted the day before the AP begins; RDEC not deducted in QIPs
chk('QIP 31Dec GY1 large',1.5e6/8,187500); chk('QIP 31Dec GY1 vl',20e6/8,2.5e6)
chk('QIP GY3+ vl',20e6/10,2e6); chk('Calder 9m vl',20e6/10*9/12,1.5e6); chk('Calder 9m large',1.5e6/10*9/12,112500)
chk('Calder GY1 QIP each (on CT before RDEC)',0.25*3.0e6/4,187500)
chk('MR GY1 lower',50000/9,5555.56); chk('MR GY1 upper',250000/9,27777.78)
# R7: BSL RDEC surrender
chk('BSL step 2 amount',600000*0.19,114000); chk('BSL surrender total',114000+486000,600000)
# R11: AIA allocation for the year to 31 March GY3
chk('AIA yr to 31 Mar GY3',400000+600000,1e6)
# R12: Calder pools consistent with CAs and TWDV at 31 March GY2
mpool=1.925; spool=7.175; chk('Calder WDAs',0.14*mpool+0.06*spool,0.7); chk('Calder TWDV',0.86*mpool+0.94*spool,8.4); chk('Calder CAs',0.5+0.6+0.7,1.8)
chk('Calder TTP via PBT',3.8+0.6-1.8+0.8-0.4,3.0)
# R13: RCF fees
chk('RCF fees',0.25+0.05+0.2+0.1,0.6); chk('TPLC GY2 NTLR debits',7.2+2.52+0.25,9.97); chk('RCF GY2 int',30*0.06+24*0.06/2,2.52)
# R5: TES GY3 composition (aggregate unchanged)
# R19: lease assignment gain after indexation (assumed factor 0.250) is £189,000 (was 0.3512 / 14.1488)
chk('TES GY3 net gains (R19)',0.8-0.5+0.189,0.489); chk('TES GY3 split (R19)',14.311+0.489,14.8)
# TEL CAs
# R18: s 58(5): FYA balances pooled after the WDA; special rate pool b/f restated to 7.72 (was 40.18 / 5.6252 / 6.6)
mp=39.5+0.5-0.3; chk('main pool before WDA (R18)',mp,39.7); wda=0.14*mp; chk('WDA (R18)',wda,5.558)
tot=9.0+0.6+0.32+wda+0.06*7.72+0.03*1.96; chk('TEL CA total (R18)',tot,16.0)
chk('main pool c/f (R18)',mp-wda+0.48,34.622); chk('SR pool c/f (R18)',7.72-0.06*7.72+0.6,7.8568)
# SBA distribution centre
chk('SBA DC',0.03*3.4e6,102000); chk('SBA GY3',102000*4/12,34000); chk('DC split',1.2+0.6+3.4,5.2)
# TES depot
ia=2.5e6*0.489; chk('IA',ia,1222500); g=6.0e6-2.5e6-ia; chk('gain',g,2277500); chk('chargeable',6.0e6-5.2e6,800000); chk('rolled',g-800000,1477500); chk('TEL base',5.2e6-1477500,3722500)
# lease
chk('assign (R19; was 351200 unindexed)',1.0e6-800000*0.811*1.25,189000); chk('lease indexation',0.25*800000*0.811,162200); chk('prem income',2.0e6*21/50,840000)
# HEL
chk('HEL TPLC',0.45*4e6,1.8e6); chk('HEL c/f',0.6e6+0.45e6+0.15e6,1.2e6); chk('HEL GY4 full-year ceiling (R21)',0.45*(2.5e6-1.2e6),585000)
# CFC
p=60e6*0.06+30e6*0.06-0.3e6; chk('TCM profit',p,5.1e6); c=0.25*p; chk('charge',0.25*c-0.09*c,204000)
p0=60e6*0.06-0.3e6; c0=0.25*p0; chk('charge GY1-4',0.25*c0-0.09*c0,132000)
# migration
ct1=0.25*(1.2e6+0.3e6+1.2e6+0.6e6+0.1e6); ct2=0.25*(1.2e6+0.1e6)
chk('CT1',ct1,850000); chk('CT2',ct2,325000); chk('plan',ct1-ct2,525000); chk('instal',(ct1-ct2)/6,87500)
# TP
chk('mgmt',2.0e6*1.05-1.6e6,500000); chk('TIL loan yr',20e6*0.06,1.2e6); chk('TIL half',20e6*0.06/2,600000); chk('settle',(8.0e6-6.0e6)*0.25,500000)
# PE
chk('PE UK topup',0.25*0.9e6-0.2*0.9e6,45000)
# royalty
chk('royalty WHT',1.2e6*0.05,60000); chk('patent box',0.9e6*15/25,540000); chk('PB tax',0.25*(0.9e6-540000),90000)
# hybrid
chk('coupon',80e6*0.07,5.6e6); chk('CT',0.25*5.6e6,1.4e6); chk('WHT',0.2*5.6e6,1.12e6)
# Pillar two
gi=5.1e6; chk('P2 topup',(0.15-(0.09*gi+204000)/gi)*gi,102000)
# TAL
chk('deg',7.5e6-5.0e6,2.5e6)
# Ridgeway
chk('RC CT',0.25*600000-25000,125000); chk('Irish',0.125*200000,25000); chk('DTL',0.25*0.8e6,200000)
# R1: RC's QIP divisor is 1 (counted 31 March, RH passive); divisor 11 figures kept for TAL's GY6 AP (QIP divisor 11)
chk('div11 large (TAL)',1.5e6/11,136363.64); chk('div11 vl (TAL)',20e6/11,1818181.82); chk('div11 first yr',10e6/11,909090.91)
chk('RC not large (div 1)',600000<1.5e6,True)
# deferred tax Calder
chk('DTL',0.25*(14.0-8.4),1.4); chk('DTA',0.25*0.8,0.2); chk('movement',(1.4-1.1)-(0.2-0.1),0.2)
# Helmside exchange
chk('HEL shares',2e6*8,16e6)
# group thresholds (R1: divisor 9 is the GY1 marginal relief count; for QIPs it applies to the 31 Dec companies in GY2 and to Calder's AP from 1 April GY2)
chk('div9 vl (QIP GY2)',20e6/9,2222222.22); chk('div9 large (QIP GY2)',1.5e6/9,166666.67)
# ---- Second pass (R18-R29): checks added after chapters 15-30 ----
# R20: GY3 CIR revised after the GY6 TP settlement (canonical for later chapters)
te3r=te3+2.0; chk('te3 revised',te3r,89.7); chk('allowance3 revised',0.3*te3r,26.91)
chk('react3 revised',0.3*te3r-an3,2.47); chk('cf3 revised',2.21+2.30-(0.3*te3r-an3),2.04)
chk('TPLC GY3 debits as filed',7.2+1.2+0.1+1.87,10.37); chk('TPLC GY3 debits revised',8.5+2.47,10.97); chk('extra deficit stranded',2.47-1.87,0.6)
chk('react3 CT value',0.25*1.87e6,467500); chk('group ratio GY3 %',round(31.64/196*100,2),16.14)
chk('debt cap GY3',31.64+4.51,36.15); chk('edc GY1',min(31.85-22.44,2.21),2.21); chk('edc GY2',min(35.23-23.52,2.21+2.30),4.51); chk('edc GY3',min(36.15-26.31,4.51),4.51)
chk('TFL net TI income',12+2.4+4.2+7.2+7.2-30.25,2.75); chk('ANTIE GY1 by co',12+2.4+4.2+8.8-2.75,24.65)
chk('GY1 w/o TP adj disallowance',24.65-0.3*(74.8-0.5),2.36)
chk('Calder GY3 revised',8.6+2.0,10.6)
# R19: GY4 lease grant (CG70960)
inc=2e6*21/50; capp=2e6-inc; lc=1.5e6*capp/(2e6+4e6)
chk('grant income',inc,840000); chk('grant cost',lc,290000); chk('grant gain',capp-lc,870000); chk('reversion cost',1.5e6-lc,1210000)
chk('grant CT',0.25*(inc+capp-lc),427500); chk('tenant deduction',inc/30,28000)
# R21: Helmside GY4 (s 155 arrangements from 1 December GY4)
hs=0.45*1.3e6*11/12; chk('HEL GY4 surrender (R21)',hs,536250); chk('HEL TTP',1.3e6-hs,763750); chk('HEL CT',0.25*(1.3e6-hs),190937.5)
chk('HEL pays TPLC',0.25*hs,134062.5); chk('TPLC ME to TEL instead',585000-hs,48750)
chk('HEL payments GY1-3 TEL',[0.25*x for x in (1.8e6,1.35e6,0.45e6)]==[450000,337500,112500],True)
# R22: stamp duty and earn-out
chk('BSL notes SD',sd(1.8e6),9000); chk('BSL total SD',sd(22.2e6)+sd(1.8e6),120000); chk('Calder+BSL SD',160000+120000,280000)
chk('story SD total',160000+120000+80000+sd(54e6)+22500,652500); chk('SDLT GR claimed',269500+289500+364500,923500); chk('SDLT clawed back',289500+364500,654000)
chk('TAL consideration',48.0+3.0+2.5,53.5)
chk('earn-out GY7 gain',2.0e6-3.0e6*2.0/(2.0+2.0),500000); chk('earn-out GY8 gain',2.5e6-1.5e6,1000000); chk('earn-out CT',0.25*1.5e6,375000)
chk('TAL QIP large 11m',1.5e6/11*11/12,125000); chk('TAL QIP vl 11m',20e6/11*11/12,1666666.67); chk('TAL first-yr 11m',10e6/11*11/12,833333.33)
# Ch 21: head office leaseback
npv=0.9e6*(1-1.035**-15)/0.035; chk('leaseback NPV',npv,10365669.81); chk('SDLT on rent',0.01*(5e6-150000)+0.02*(npv-5e6),155813.40)
# Ch 18: Coldwater and Helmside
chk('Coldwater pool',4.8e6+3.6e6,8.4e6); chk('Coldwater cost out',8.4e6*1.6/4.8,2.8e6); chk('Coldwater gain',1.6e6*3.10-2.8e6,2.16e6); chk('Coldwater c/f',8.4e6-2.8e6,5.6e6)
chk('HEL pool',9e6+16e6,25e6); chk('HEL shares 85%',(9e6+8e6)/20e6,0.85); chk('Greyfell gain',16e6-8e6,8e6)
# Ch 19: Tarnmoor Pumps
chk('Pumps gain',18000-100,17900); chk('Pumps CT',0.25*17900,4475)
# R23: unremittable
chk('unremittable CT deferred',0.25*400000,100000)
# Ch 22: TIL migration AP threshold
chk('TIL vl 6m',20e6/10*6/12,1e6); chk('CT2 split',300000+25000,325000)
# Ch 24/25: royalty DTR; branch
chk('royalty profit',1.2e6-300000,900000); chk('royalty UK CT payable',90000-60000,30000)
chk('branch loss relief',0.25*300000,75000); chk('branch project tax',0.25*(0.9e6-0.3e6),150000)
# Ch 26/30: CFC and Pillar Two
chk('TCM no Ch9 charge',0.25*5.1e6-0.09*5.1e6,816000); chk('P2 GY1-4 topup (R25)',(0.15-(0.09*3.3e6+132000)/3.3e6)*3.3e6,66000)
chk('P2 GY5 total',459000+204000+102000,765000); chk('P2 GY5 = 15%',0.15*5.1e6,765000)
chk('UTPP 80% gate Vallaria',0.20*2.0e6/(0.25*2.0e6),0.8)
# Ch 27: TP
chk('TEL GY1 CT w/o TP adj',0.25*(10.535-0.5),2.50875); chk('HMRC claim adj',9.5e6-6.0e6,3.5e6); chk('HMRC claim CT',0.25*3.5e6,875000)
chk('TIL TP tax GY4',0.25*0.6e6,150000); chk('TIL TP tax yr',0.25*1.2e6,300000)
# Ch 29: Undertow
chk('Undertow full CFC net',1.4e6-1.12e6,280000); chk('Undertow claimed saving',1.4e6-350000,1050000)
# R26: interest rates (Bank Rate 3.75%)
chk('QIP debit',3.75+2.5,6.25); chk('QIP credit',3.75-0.25,3.50); chk('late payment',3.75+4,7.75); chk('repayment',3.75-1,2.75)
bad=[c for c in checks if not c[1]]
print(len(checks),'checks;',len(bad),'failures')
for b in bad: print(b)
