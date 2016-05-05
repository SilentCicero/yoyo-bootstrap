const yo = require("yo-yo")
const connect = require("throw-down/connect")
const update = require("throw-down/update")(yo.update)
require("./less/date-picker.less")

const DatePicker = function(props) {
  var f = function () {}, selected, show, id
  props = props || {}
  props.i18n = props.i18n && props.i18n || {
      months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
      monthsShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      days: ['Su','Mo','Tu','We','Th','Fr','Sa']
  }
  props.onChange = props.onChange || f
  props.showToday = props.showToday || true
  props.autoClose = props.autoClose || true
  props.viewMode = props.viewMode || 'days'
  props.datesDisabled = props.datesDisabled || []
  props.daysOfWeekDisabled = props.daysOfWeekDisabled || []
  props.defaultViewDate = props.defaultViewDate || new Date()
  selected = props.defaultViewDate
  show = props.defaultViewDate

  function init (_id) {
    id = _id
  }

  function renderYearsOfDecade () {
    var iter = new Date(show),
        rows = [], count = 0, rowCount = 0,
        year, startYear = (iter.getFullYear() - (iter.getFullYear() % 10))
    iter.setYear(startYear)

    for (year = startYear; year < startYear + 12; ++year) {
      if(count % 3 == 0) rowCount++
      if(!rows[rowCount]) rows[rowCount] = []
      rows[rowCount][year] = yo`<th onclick=${select} class=${(iter.getFullYear() === selected.getFullYear() && 'active ' || '')} data-mode="months" data-time=${iter.getTime()}>
            ${year}
        </th>`

      count ++;
      iter.setYear(year + 1)
    }

    return rows
  }

  function renderMonthsOfYear () {
    var iter = new Date(show), rows = [], rowCount = 0, month
    iter.setMonth(0)

    for (month = 0; month < 12; ++month) {
      if(month % 3 == 0) rowCount++
      if(!rows[rowCount]) rows[rowCount] = []
      rows[rowCount][month] = yo`<th onclick=${select} class=${((iter.getYear() === selected.getYear()) && (iter.getMonth() === selected.getMonth()) && 'active ' || '')} data-mode="days" data-time=${iter.getTime()}>
            ${props.i18n.monthsShort[month]}
        </th>`

      iter.setMonth(month + 1)
    }

    return rows
  }

  function renderDaysOfMonth () {
    var iter = new Date(show), rows = [], rowCount = 0, day
    iter.setDate(1) // First of the month
    iter.setDate(iter.getDate() - iter.getDay()) // Back to Sunday

    // We are going to have 6 weeks always displayed to keep a consistent calendar size
    for (day = 0; day < (6 * 7); ++day) {
      var dayOfMonth = iter.getDate(), disabled = false
      if(day % 7 == 0) rowCount++
      if(!rows[rowCount]) rows[rowCount] = []
      props.datesDisabled.map(function (disabledDate) { disabled = iter.getTime() === disabledDate.getTime() && true || disabled })
      props.daysOfWeekDisabled.map(function (disabledDay) { disabled = iter.getDay() === disabledDay && true || disabled })
      rows[rowCount][day] = yo`<th onclick=${disabled && f || select} class=${((iter.getMonth() !== selected.getMonth()) && 'not-in-month ' || '')
                          + ((iter.toDateString() === new Date().toDateString()) && props.showToday && 'is-today ' || '')
                          + ((iter.getTime() === selected.getTime()) && 'active ' || '')
                          + (disabled === true && 'disabled ' || '')
                        } data-mode="days" data-day="1" data-time=${iter.getTime()}>
        ${dayOfMonth}
      </th>`
      iter.setDate(dayOfMonth + 1)
    }

    return rows
  }

  function view (event) {
    show = new Date(parseInt(event.target.dataset.time, 10))
    props.viewMode = event.target.dataset.mode
    update(id, render())
  }

  function select (event) {
    selected = new Date(parseInt(event.target.dataset.time, 10))
    props.viewMode = event.target.dataset.mode
    show = selected
    update(id, render())
    if(event.target.dataset.day) props.onChange(selected)
  }

  function render () {
    var shift = props.viewMode === 'days' && 2629746000 || (props.viewMode === 'months' && 31556952000 || 315569520000),
        decade = (selected.getFullYear() - (selected.getFullYear() % 10))

    return yo`<div class="dropdown-menu dropdown-datepicker dropdown-menu-${props.position || 'right'}">
      <table class="table table-condensed">
        <thead>
          <tr>
            <th onclick=${select} data-time=${selected.getTime() - shift} data-mode=${props.viewMode}>${props.first || '«'}</th>
            <th onclick=${view} data-time=${selected.getTime()} data-mode=${props.viewMode === 'days' && 'months' || 'years'} colspan=${props.viewMode === 'days' && 5 || 1}>${props.viewMode === 'days' && props.i18n.months[selected.getMonth()] || (props.viewMode === 'months' && selected.getFullYear() || decade + ' - ' + (decade + 11))}</th>
            <th onclick=${select} data-time=${selected.getTime() + shift} data-mode=${props.viewMode}>${props.last || '»'}</th>
          </tr>
          ${props.viewMode === 'days' && yo`<tr class="weekDays">${
            props.i18n.days.map(function (day) {return yo`<th>${day}</th>`})
          }</tr>` || ''}
        </thead>
        <tbody>
          ${((props.viewMode === 'years' && renderYearsOfDecade())
          || (props.viewMode === 'months' && renderMonthsOfYear())
          || (props.viewMode === 'days' && renderDaysOfMonth())).map(function(row){
            return yo`<tr class=${props.viewMode}>${row.map(function(item){ return item})}</tr>`
          }) || ''}
        </tbody>
      </table>
    </div>`
  }

  return connect(render, init)
}

module.exports = DatePicker
