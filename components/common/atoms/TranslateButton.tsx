interface TranslateButtonProps {
  value: 'ko' | 'en'
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const TranslateButton = ({ value, onChange }: TranslateButtonProps) => {
  return (
    <select
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2 pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
      id="language"
      onChange={onChange}
      value={value}
    >
      <option selected value="ko">
        한국어&nbsp;🇰🇷
      </option>
      <option value="en">English&nbsp;🇺🇸</option>
    </select>
  )
}
