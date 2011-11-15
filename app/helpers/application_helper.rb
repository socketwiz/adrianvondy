module ApplicationHelper
  # Return a title on a per-page basis.
  def title
    base_title = "Adrian & Vondy Law Firm in Winchester, Virginia"
    if @title.nil?
      base_title
    else
      "#{@title}"
    end
  end

  def description
    base_description = nil
    if @description.nil?
      base_description
    else
      "<meta name=\"description\" content=\"#{@description}\" />"
    end
  end

  def keywords
    base_keywords = nil
    if @keywords.nil?
      base_keywords
    else
      "<meta name=\"keywords\" content=\"#{@keywords}\" />"
    end
  end
end
