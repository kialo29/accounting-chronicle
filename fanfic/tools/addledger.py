import sys
p='ledger.md';t=open(p).read()
heads=['## Facts established','## Open threads','## Current state']
for h,a in zip(heads,sys.argv[1:4]):
    if not a.strip(): continue
    i=t.index(h)+len(h)+1
    j=t.find('\n## ',i); j=len(t) if j==-1 else j+1
    t=t[:j].rstrip('\n')+'\n'+a.strip()+'\n\n'+t[j:]
open(p,'w').write(t)
