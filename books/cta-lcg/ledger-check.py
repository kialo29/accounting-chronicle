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
chk('TAL SD',sd(48e6),240000); chk('RH SD',sd(4.5e6),22500)
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
an1=30.25-7.2+1.35+0.25; an2=30.25-7.2+1.8+0.72+0.25; an3=30.25-7.2+1.2+0.1
chk('antie1',an1,24.65); chk('antie2',an2,25.82); chk('antie3',an3,24.35)
chk('dis1',an1-0.3*te1,2.21); chk('dis2',an2-0.3*te2,2.30); chk('react3',0.3*te3-an3,1.96); chk('cf3',2.21+2.30-1.96,2.55)
chk('cve gy2',3/12*4.4+9/12*4.8,4.7); chk('cve gy3',3/12*4.8+3.2+6.0-1.8,8.6)
chk('angie1',30.25+1.6,31.85); chk('angie2',30.25+2.77,33.02); chk('angie3',30.25+1.3,31.55)
# TEL
chk('TEL GY1 before',50-14-12,24.0); chk('TEL GY1 TTP',24-5.9-6.59-1.8,9.71); chk('TEL GY1 CT',0.25*9.71,2.4275)
chk('TPLC GY1 excess ME',8.0-2.1,5.9); chk('TPLC GY1 NTLR',7.2+1.6-2.21,6.59)
chk('TEL GY2 TP',42.0-16.0,26.0); chk('TPLC GY2 NTLR',7.2+2.77-2.30,7.67); chk('TEL GY2 TTP',26.0-6.3-7.67-2.6-1.35,8.08); chk('TEL GY2 CT',0.25*8.08,2.02)
chk('TEL group relief GY2',6.3+7.67+2.6+1.35,17.92)
# TEL CAs
mp=39.5+0.48+0.5-0.3; chk('main pool',mp,40.18); wda=0.14*mp; chk('WDA',wda,5.6252)
tot=9.0+0.6+0.32+wda+0.06*6.6+0.03*1.96; chk('TEL CA total',tot,16.0)
# SBA distribution centre
chk('SBA DC',0.03*3.4e6,102000); chk('SBA GY3',102000*4/12,34000); chk('DC split',1.2+0.6+3.4,5.2)
# TES depot
ia=2.5e6*0.489; chk('IA',ia,1222500); g=6.0e6-2.5e6-ia; chk('gain',g,2277500); chk('chargeable',6.0e6-5.2e6,800000); chk('rolled',g-800000,1477500); chk('TEL base',5.2e6-1477500,3722500)
# lease
chk('assign',1.0e6-800000*0.811,351200); chk('prem income',2.0e6*21/50,840000)
# HEL
chk('HEL TPLC',0.45*4e6,1.8e6); chk('HEL c/f',0.6e6+0.45e6+0.15e6,1.2e6); chk('HEL GY4',0.45*(2.5e6-1.2e6),585000)
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
chk('RC divisor11 large',1.5e6/11,136363.64); chk('vl',20e6/11,1818181.82); chk('first yr',10e6/11,909090.91)
# deferred tax Calder
chk('DTL',0.25*(14.0-8.4),1.4); chk('DTA',0.25*0.8,0.2); chk('movement',(1.4-1.1)-(0.2-0.1),0.2)
# Helmside exchange
chk('HEL shares',2e6*8,16e6)
# group thresholds
chk('GY1 vl',20e6/9,2222222.22); chk('GY1 large',1.5e6/9,166666.67)
bad=[c for c in checks if not c[1]]
print(len(checks),'checks;',len(bad),'failures')
for b in bad: print(b)
