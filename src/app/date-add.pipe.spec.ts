import { DateAddPipe } from './date-add.pipe';

describe('DateAddPipe', () => {
  it('create an instance', () => {
    const pipe = new DateAddPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('DateAddPipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  let pipe = new DateAddPipe();
 //simple example that checks if date, time works
  it('transforms "2018-11-06 & 07:00:00" to "2018-11-06 & 08:00:00"', () => {
    expect(pipe.transform('2018-11-06 & 07:00:00')).toBe('2018-11-06 & 08:00:00');
  });
 
 


});
