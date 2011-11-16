class PagesController < ApplicationController
  def index
    @title = "Adrian & Vondy Law Firm in Winchester, Virginia"
    @description = "Winchester law firm Adrian & Vondy P.L.C. practices in the fields of bankruptcy, Social Security Disability, Wills, Trusts, Estate Planning, Probate, Guardianships and Real Estate."
    @keywords = "Winchester, lawyer, attorney, bankruptcy, Social Security Disability, Wills, Trusts, Estate Planning, Probate, Guardianships, Real Estate, Virginia, West Virginia"
    @selected = "index"
  end

  def directions
    @title = "Adrian & Vondy Map in Winchester, Virginia"
    @description = "Location of offices of Adrian & Vondy, P.L.C., in Winchester, Virginia."
    @keywords = "Winchester, lawyer, attorney, bankruptcy, Social Security Disability, Wills, Trusts, Estate Planning, Probate, Guardianships, Real Estate, Virginia"
    @selected = "directions"
  end

  def bankruptcy
    @title = "Adrian & Vondy Bankruptcy Practice"
    @description = "Adrian & Vondy, a Winchester law firm, has helped hundreds of debtors in Virginia and West Virginia resolve debt problems, outstanding judgments, wage garnishments and lawsuits through their bankruptcy practice."
    @keywords = "Winchester, lawyer, attorney, bankruptcy, debt, garnishments, lawsuits, Chapter 7, Virginia, West Virginia"
  end

  def estate_planning
    @title = "Adrian & Vondy Wills, Trusts, Probate and Estate Administration"
    @description = "Winchester attorney Frederick S. Vondy is experienced in preparing wills, trusts, living wills, powers of attorney and special needs trust, and assists executors in  probate proceedings and estate administration."
    @keywords = "Winchester, lawyer, attorney, wills, trusts, estates, probate, Virginia, West Virginia"
  end

  def estate_administration
    @title = "Adrian & Vondy Wills, Trusts, Probate and Estate Administration"
    @description = "Winchester attorney Frederick S. Vondy is experienced in preparing wills, trusts, living wills, powers of attorney and special needs trust, and assists executors in  probate proceedings and estate administration."
    @keywords = "Winchester, lawyer, attorney, wills, trusts, estates, probate, Virginia, West Virginia"
  end

  def real_estate
    @title = "Adrian & Vondy Real Estate Services"
    @description = "Winchester attorney Frederick S. Vondy provides complete real estate settlement services from the initial contract through the closing for real estate transactions in Virginia and West Virginia."
    @keywords = "Winchester, lawyer, attorney, real estate, closings, settlements, contracts, deeds, Virginia, West Virginia"
  end

  def social_security
    @title = "Adrian & Vondy Social Security Disability"
    @description = "Winchester attorney Kay Adrian assists individuals in obtaining Social Security Disability benefits."
    @keywords = "Winchester, lawyer, attorney, Social Security, Disability, SSI, Virginia, West Virginia"
  end

  def guardianship
    @title = "Adrian & Vondy Guardians and Conservators"
    @description = "Winchester attorney Kay Adrian is experienced in handling cases to appoint guardians or conservators to manage the personal, medical and financial affairs of disabled persons."
    @keywords = "Winchester, lawyer, attorney, guardian, conservator"
  end

  def adrian
    @title = "Kay Adrian of Adrian & Vondy P.L.C."
    @description = "Winchester attorney Kay Adrian assists claimants in obtaining Social Security Disability benefits, representing debtors in bankruptcy proceedings, and establishing guardianships and conservatorships for the incapacitated and disabled."
    @keywords = "Winchester, attorney, lawyer, bankruptcy, Social Security, guardian, conservator, Virginia"
  end

  def annette
    @title = "Annette McCracken of Adrian & Vondy P.L.C."
    @description = "Annette McCracken is the legal assistant at Adrian & Vondy P.L.C. in Winchester, Virginia."
    @keywords = "Winchester, attorney, legal assistant"
  end

  def tiffany
    @title = "Tiffany A. H. Merkel of Adrian & Vondy P.L.C."
    @description = "Tiffany A. H. Merkel is the bankruptcy paralegal at Adrian & Vondy P.L.C. in Winchester, Virginia."
    @keywords = "Winchester, attorney, bankruptcy, paralegal"
  end

  def vondy
    @title = "Frederick S. Vondy of Adrian & Vondy P.L.C."
    @description = "Frederick S. Vondy practices law in Virginia and West Virginia in the fields of estate planning and probate administration, real estate settlements, and representing both creditors and debtors in bankruptcy proceedings."
    @keywords = "Winchester, attorney, lawyer, real estate, wills, trusts, bankruptcy, probate, Virginia, West Virginia "
  end
end
