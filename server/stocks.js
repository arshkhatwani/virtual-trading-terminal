const stocks = [
  { company_name: "NIFTY BANK", symbol: "BANKNIFTY" },
  { company_name: "NIFTY 50", symbol: "NIFTY" },
  {
    company_name: "ACC Ltd.",
    symbol: "ACC",
  },
  {
    company_name: "Abbott India Ltd.",
    symbol: "ABBOTINDIA",
  },
  {
    company_name: "Adani Enterprises Ltd.",
    symbol: "ADANIENT",
  },
  {
    company_name: "Adani Green Energy Ltd.",
    symbol: "ADANIGREEN",
  },
  {
    company_name: "Adani Ports and Special Economic Zone Ltd.",
    symbol: "ADANIPORTS",
  },
  {
    company_name: "Adani Transmission Ltd.",
    symbol: "ADANITRANS",
  },
  {
    company_name: "Alkem Laboratories Ltd.",
    symbol: "ALKEM",
  },
  {
    company_name: "Ambuja Cements Ltd.",
    symbol: "AMBUJACEM",
  },
  {
    company_name: "Apollo Hospitals Enterprise Ltd.",
    symbol: "APOLLOHOSP",
  },
  {
    company_name: "Asian Paints Ltd.",
    symbol: "ASIANPAINT",
  },
  {
    company_name: "Aurobindo Pharma Ltd.",
    symbol: "AUROPHARMA",
  },
  {
    company_name: "Avenue Supermarts Ltd.",
    symbol: "DMART",
  },
  {
    company_name: "Axis Bank Ltd.",
    symbol: "AXISBANK",
  },
  {
    company_name: "Bajaj Auto Ltd.",
    symbol: "BAJAJ-AUTO",
  },
  {
    company_name: "Bajaj Finance Ltd.",
    symbol: "BAJFINANCE",
  },
  {
    company_name: "Bajaj Finserv Ltd.",
    symbol: "BAJAJFINSV",
  },
  {
    company_name: "Bajaj Holdings & Investment Ltd.",
    symbol: "BAJAJHLDNG",
  },
  {
    company_name: "Bandhan Bank Ltd.",
    symbol: "BANDHANBNK",
  },
  {
    company_name: "Berger Paints India Ltd.",
    symbol: "BERGEPAINT",
  },
  {
    company_name: "Bharat Petroleum Corporation Ltd.",
    symbol: "BPCL",
  },
  {
    company_name: "Bharti Airtel Ltd.",
    symbol: "BHARTIARTL",
  },
  {
    company_name: "Biocon Ltd.",
    symbol: "BIOCON",
  },
  {
    company_name: "Bosch Ltd.",
    symbol: "BOSCHLTD",
  },
  {
    company_name: "Britannia Industries Ltd.",
    symbol: "BRITANNIA",
  },
  {
    company_name: "Cadila Healthcare Ltd.",
    symbol: "CADILAHC",
  },
  {
    company_name: "Cipla Ltd.",
    symbol: "CIPLA",
  },
  {
    company_name: "Coal India Ltd.",
    symbol: "COALINDIA",
  },
  {
    company_name: "Colgate Palmolive (India) Ltd.",
    symbol: "COLPAL",
  },
  {
    company_name: "DLF Ltd.",
    symbol: "DLF",
  },
  {
    company_name: "Dabur India Ltd.",
    symbol: "DABUR",
  },
  {
    company_name: "Divi's Laboratories Ltd.",
    symbol: "DIVISLAB",
  },
  {
    company_name: "Dr. Reddy's Laboratories Ltd.",
    symbol: "DRREDDY",
  },
  {
    company_name: "Eicher Motors Ltd.",
    symbol: "EICHERMOT",
  },
  {
    company_name: "GAIL (India) Ltd.",
    symbol: "GAIL",
  },
  {
    company_name: "Gland Pharma Ltd.",
    symbol: "GLAND",
  },
  {
    company_name: "Godrej Consumer Products Ltd.",
    symbol: "GODREJCP",
  },
  {
    company_name: "Grasim Industries Ltd.",
    symbol: "GRASIM",
  },
  {
    company_name: "HCL Technologies Ltd.",
    symbol: "HCLTECH",
  },
  {
    company_name: "HDFC Asset Management Company Ltd.",
    symbol: "HDFCAMC",
  },
  {
    company_name: "HDFC Bank Ltd.",
    symbol: "HDFCBANK",
  },
  {
    company_name: "HDFC Life Insurance Company Ltd.",
    symbol: "HDFCLIFE",
  },
  {
    company_name: "Havells India Ltd.",
    symbol: "HAVELLS",
  },
  {
    company_name: "Hero MotoCorp Ltd.",
    symbol: "HEROMOTOCO",
  },
  {
    company_name: "Hindalco Industries Ltd.",
    symbol: "HINDALCO",
  },
  {
    company_name: "Hindustan Petroleum Corporation Ltd.",
    symbol: "HINDPETRO",
  },
  {
    company_name: "Hindustan Unilever Ltd.",
    symbol: "HINDUNILVR",
  },
  {
    company_name: "Housing Development Finance Corporation Ltd.",
    symbol: "HDFC",
  },
  {
    company_name: "ICICI Bank Ltd.",
    symbol: "ICICIBANK",
  },
  {
    company_name: "ICICI Lombard General Insurance Company Ltd.",
    symbol: "ICICIGI",
  },
  {
    company_name: "ICICI Prudential Life Insurance Company Ltd.",
    symbol: "ICICIPRULI",
  },
  {
    company_name: "ITC Ltd.",
    symbol: "ITC",
  },
  {
    company_name: "Indian Oil Corporation Ltd.",
    symbol: "IOC",
  },
  {
    company_name: "Indraprastha Gas Ltd.",
    symbol: "IGL",
  },
  {
    company_name: "Indus Towers Ltd.",
    symbol: "INDUSTOWER",
  },
  {
    company_name: "IndusInd Bank Ltd.",
    symbol: "INDUSINDBK",
  },
  {
    company_name: "Info Edge (India) Ltd.",
    symbol: "NAUKRI",
  },
  {
    company_name: "Infosys Ltd.",
    symbol: "INFY",
  },
  {
    company_name: "InterGlobe Aviation Ltd.",
    symbol: "INDIGO",
  },
  {
    company_name: "JSW Steel Ltd.",
    symbol: "JSWSTEEL",
  },
  {
    company_name: "Jubilant Foodworks Ltd.",
    symbol: "JUBLFOOD",
  },
  {
    company_name: "Kotak Mahindra Bank Ltd.",
    symbol: "KOTAKBANK",
  },
  {
    company_name: "Larsen & Toubro Infotech Ltd.",
    symbol: "LTI",
  },
  {
    company_name: "Larsen & Toubro Ltd.",
    symbol: "LT",
  },
  {
    company_name: "Lupin Ltd.",
    symbol: "LUPIN",
  },
  {
    company_name: "MRF Ltd.",
    symbol: "MRF",
  },
  {
    company_name: "Mahindra & Mahindra Ltd.",
    symbol: "M&M",
  },
  {
    company_name: "Marico Ltd.",
    symbol: "MARICO",
  },
  {
    company_name: "Maruti Suzuki India Ltd.",
    symbol: "MARUTI",
  },
  {
    company_name: "Muthoot Finance Ltd.",
    symbol: "MUTHOOTFIN",
  },
  {
    company_name: "NMDC Ltd.",
    symbol: "NMDC",
  },
  {
    company_name: "NTPC Ltd.",
    symbol: "NTPC",
  },
  {
    company_name: "Nestle India Ltd.",
    symbol: "NESTLEIND",
  },
  {
    company_name: "Oil & Natural Gas Corporation Ltd.",
    symbol: "ONGC",
  },
  {
    company_name: "Petronet LNG Ltd.",
    symbol: "PETRONET",
  },
  {
    company_name: "Pidilite Industries Ltd.",
    symbol: "PIDILITIND",
  },
  {
    company_name: "Piramal Enterprises Ltd.",
    symbol: "PEL",
  },
  {
    company_name: "Power Grid Corporation of India Ltd.",
    symbol: "POWERGRID",
  },
  {
    company_name: "Procter & Gamble Hygiene & Health Care Ltd.",
    symbol: "PGHH",
  },
  {
    company_name: "Punjab National Bank",
    symbol: "PNB",
  },
  {
    company_name: "Reliance Industries Ltd.",
    symbol: "RELIANCE",
  },
  {
    company_name: "SBI Cards and Payment Services Ltd.",
    symbol: "SBICARD",
  },
  {
    company_name: "SBI Life Insurance Company Ltd.",
    symbol: "SBILIFE",
  },
  {
    company_name: "Shree Cement Ltd.",
    symbol: "SHREECEM",
  },
  {
    company_name: "Siemens Ltd.",
    symbol: "SIEMENS",
  },
  {
    company_name: "State Bank of India",
    symbol: "SBIN",
  },
  {
    company_name: "Sun Pharmaceutical Industries Ltd.",
    symbol: "SUNPHARMA",
  },
  {
    company_name: "Tata Consultancy Services Ltd.",
    symbol: "TCS",
  },
  {
    company_name: "Tata Consumer Products Ltd.",
    symbol: "TATACONSUM",
  },
  {
    company_name: "Tata Motors Ltd.",
    symbol: "TATAMOTORS",
  },
  {
    company_name: "Tata Steel Ltd.",
    symbol: "TATASTEEL",
  },
  {
    company_name: "Tech Mahindra Ltd.",
    symbol: "TECHM",
  },
  {
    company_name: "Titan Company Ltd.",
    symbol: "TITAN",
  },
  {
    company_name: "Torrent Pharmaceuticals Ltd.",
    symbol: "TORNTPHARM",
  },
  {
    company_name: "UPL Ltd.",
    symbol: "UPL",
  },
  {
    company_name: "UltraTech Cement Ltd.",
    symbol: "ULTRACEMCO",
  },
  {
    company_name: "United Breweries Ltd.",
    symbol: "UBL",
  },
  {
    company_name: "United Spirits Ltd.",
    symbol: "MCDOWELL-N",
  },
  {
    company_name: "Vedanta Ltd.",
    symbol: "VEDL",
  },
  {
    company_name: "Wipro Ltd.",
    symbol: "WIPRO",
  },
  {
    company_name: "Yes Bank Ltd.",
    symbol: "YESBANK",
  },
];

module.exports = stocks;
