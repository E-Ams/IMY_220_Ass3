class EventHandler
{
//-----------------------------------------------------------------[constructor]
  constructor( arr )
  {
    this.events = arr;
  }

//-------------------------------------------------------[getEventsBetweenDates]
  getEventsBetweenDates( start, end )
  {
    let someEvents = {};

    someEvents = events.filter( (number) =>
    {
      let startCheck = new Date( start );
      let endCheck = new Date( end );
      let dateStart = new Date( number.dateStart );
      let dateEnd = new Date( number.dateEnd );

      if ( startCheck <= dateStart && endCheck >= dateEnd )
      {
        return number;
      }
    })

    return someEvents;
  }

//------------------------------------------------------------------[getByMonth]
  getByMonth( month )
  {
    let someEvents = {};

    someEvents = events.filter( (number) =>
    {
      let m = new Date( number.dateStart ).getMonth()+1;

      if ( month.length > 1 )
      {
        month = month.slice(1);
      }

      if ( month == m )
      {
        return number;
      }
    });

    return someEvents;
  }

//--------------------------------------------------------[getUniqueDateAndSort]
  getUniqueDateAndSort()
  {
    events.sort( function( a, b)
    {
      a = new Date( a.dateStart ).getMonth()+1;
      b = new Date( b.dateStart ).getMonth()+1;

      return b - a;
    })

    let temp = {};

    events.filter( (number) =>
    {
      let tempStart = temp.indexOf( number.dateStart );
      let tempEnd = temp.indexOf( number.dateEnd );

      if ( tempStart !== tempEnd )
      {
        return number;
      }
    });

    return temp;
  }

//------------------------------------------------------------------[getSummary]
  getSummary( arr )
  {
    let summary = [];

    arr.every( (n) =>
    {
      let sum = "";
      if ( n.dateStart === n.dateEnd )
      {
        sum = "On " + n.dateStart.toString() + ": " + n.name.toString() +
            "(" + n.description.toString() + ")";
      }
      else
      {
        sum = "From " + n.dateStart.toString() + " to " + n.dateEnd.toString()
            + ": " + n.name.toString() +
            "(" + n.description.toString() + ")";
      }

      summary.push( sum );
      return sum;
    });

    return summary;
  }
}