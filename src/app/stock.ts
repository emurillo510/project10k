export interface Stock {
    companyName: string
    tickerSymbol: string
    marketPrice?: string
    changeInPriceDaily?: string
    changeInPercentDaily?: string
    description?: string
    balanceSheeT?: string
    incomeStatement?: string
    cashFlow?: string
    annualReportLink?: string

    // dividends
    quarterlyDividend?: string
    annualDividend?: string
    previousExDate?: string
    nextPayDate?: string

    // earnings
    nextEarningsDate?: string
    earningsPerShare?: string
    priceEarnings?: string
    forwardPriceEarnings?: string
    

    // share profile
    marketCapitalization?: string
    sharesOutstanding?: string
    sharesHeldByInstitutions?: string

    // business summary
    businessSummary?: string
};