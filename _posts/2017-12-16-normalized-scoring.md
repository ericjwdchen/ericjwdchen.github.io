---
layout: post
title: Normalized Scoring
---

One issue that I see with advanced analytics in basketball is that they aren't great for cross-era comparisons. For example, points per possession and offensive efficiency (points per 100 possessions) both adjust for pace of play by recognizing that more possessions naturally lead to more points. However, a possession-based statistic doesn't recognize the fact that, across eras, the expected value of a possession changes. In the 2002-2003 regular season, the Dallas Mavericks were the highest rated team in terms of offensive efficiency with 96.4 points per 100 possessions. In the 2016-2017 regular season, the Philadelphia 76ers were the *worst* rated team in terms of offensive efficiency with 100.7 points per 100 possessions. The inflation of the expected value of a possession is likely due to [changes in NBA rules that favor offense](http://www.espn.com/espn/playbook/story/_/id/8449538/offenses-scoring-control-time-tweak-some-rules), as well as the increased use of the 3-point shot.

Traditional statistics (e.g. points per game) and advanced analytics aren't a good starting point for cross-era comparisons. But here's an idea of a simple statistic for individual scoring that does hold up over time. You can think of it as an alternative to points per game (PPG) or offensive efficiency for an individual player. I call it normalized scoring. Normalized scoring describes what percentage of the team's points that a particular player scored. If you add up the normalized scoring for all of the players on one team, you get 100%.

For example, in the 2017 NBA finals Kevin Durant averaged 35.2 PPG. The entire Warriors team averaged 121.6 PPG. Thus, Durant's normalized scoring for the 2017 NBA finals is 28.9%, i.e. he scored 28.9% of the team's points.

You can start to see how this is a useful cross-era comparison. Because it doesn't matter what rules change or what styles of basketball get more or less popular, if someone in 1995 has higher normalized scoring than someone in 2017, then that's a good indicator that they were a "better scorer".

I know that this statistic doesn't capture a lot of the nuance of basketball, and probably is not particularly useful for scouting and player evaluation. which are typical uses for advanced analytics. But I see normalized scoring as a replacement for cross-era comparisons of PPG. For example, if you want to compare the scoring ability of Michael Jordan in his NBA finals against Kevin Durant, then normalized scoring is a really simple, but powerful number that guards against modern biases that I described earlier. For me, I came up with this statistic when I was doing the most common of comparisons and thinking about who is the NBA GOAT. How did Michael Jordan's NBA Finals performances compare to LeBron James or Kevin Durant? In 2017, Durant averaged 35.2 PPG. In 1998, Jordan averaged 33.5 PPG.

The benefit of normalized scoring lies in its simplicity. All the number does is acknowledge that "points" in and of themselves don't matter. If Adam Silver doubles the value of every shot/basket in basketball tomorrow, that doesn't mean that every player is now twice as good at scoring. You don't win basketball with absolute numbers, you win with relative numbers. So, by making a relative PPG metric, you do a much better job of isolating how much true "scoring" any player did. Because it's simple, though, it doesn't bring a lot of the baggage that other advanced analytics bring (WAR, PER). Normalized scoring simply makes explicit what all fans calculate implicitly. If someone averages 10 PPG in pickup basketball to 21, of course that is different than 10 PPG in an NBA game. Normalized scoring is just the formalization of that simple intuition.

Below, are normalized scoring and PPG for all NBA Finals MVPs from 1990-2017. I compiled this list to show how normalized scoring is more informative than PPG.

<div class="table-wrapper">
<table>
<tbody>
<thead><tr><th>Year</th><th>Player</th><th>Normalized Scoring</th><th>Points Per Game</th></tr></thead>
 <tr><td>1990</td><td>Isiah Thomas (Detroit Pistons)</td><td>25.8%</td><td>27.6</td></tr>
 <tr><td>1991</td><td>Michael Jordan (Chicago Bulls)</td><td>30.8%</td><td>31.2</td></tr>
 <tr><td>1992</td><td>Michael Jordan (Chicago Bulls)</td><td>34.5%</td><td>35.8</td></tr>
 <tr><td>1993</td><td>Michael Jordan (Chicago Bulls)</td><td>38.4%</td><td>41.0</td></tr>
 <tr><td>1994</td><td>Hakeem Olajuwon (Chicago Bulls)</td><td>31.2%</td><td>26.9</td></tr>
 <tr><td>1995</td><td>Hakeem Olajuwon (Chicago Bulls)</td><td>28.7%</td><td>32.8</td></tr>
 <tr><td>1996</td><td>Michael Jordan (Chicago Bulls)</td><td>29.4%</td><td>27.3</td></tr>
 <tr><td>1997</td><td>Michael Jordan (Chicago Bulls)</td><td>36.8%</td><td>32.3</td></tr>
 <tr><td>1998</td><td>Michael Jordan (Chicago Bulls)</td><td>38.1%</td><td>33.5</td></tr>
 <tr><td>1999</td><td>Tim Duncan (San Antonio Spurs )</td><td>32.3%</td><td>27.4</td></tr>
 <tr><td>2000</td><td>Shaquille O'Neal (Los Angeles Lakers)</td><td>36.2%</td><td>38.0</td></tr>
 <tr><td>2001</td><td>Shaquille O'Neal (Los Angeles Lakers)</td><td>32.8%</td><td>33.0</td></tr>
 <tr><td>2002</td><td>Shaquille O'Neal (Los Angeles Lakers)</td><td>34.2%</td><td>36.3</td></tr>
 <tr><td>2003</td><td>Tim Duncan (San Antonio Spurs )</td><td>27.5%</td><td>24.2</td></tr>
 <tr><td>2004</td><td>Chauncey Billups (Detroit Pistons )</td><td>23.6%</td><td>21.0</td></tr>
 <tr><td>2005</td><td>Tim Duncan (San Antonio Spurs )</td><td>24.2%</td><td>20.6</td></tr>
 <tr><td>2006</td><td>Dwyane Wade (Miami Heat )</td><td>37.3%</td><td>34.7</td></tr>
 <tr><td>2007</td><td>Tony Parker (San Antonio Spurs )</td><td>28.3%</td><td>24.5</td></tr>
 <tr><td>2008</td><td>Paul Pierce (Boston Celtics )</td><td>21.4%</td><td>21.8</td></tr>
 <tr><td>2009</td><td>Kobe Bryant (Los Angeles Lakers)</td><td>32.2%</td><td>32.4</td></tr>
 <tr><td>2010</td><td>Kobe Bryant (Los Angeles Lakers)</td><td>31.5%</td><td>28.6</td></tr>
 <tr><td>2011</td><td>Dirk Nowitzki (Dallas Mavericks)</td><td>27.5%</td><td>26.0</td></tr>
 <tr><td>2012</td><td>LeBron James (Miami Heat )</td><td>28.0%</td><td>28.6</td></tr>
 <tr><td>2013</td><td>LeBron James (Miami Heat )</td><td>26.1%</td><td>25.3</td></tr>
 <tr><td>2014</td><td>Kawhi Leonard (San Antonio Spurs )</td><td>16.9%</td><td>17.8</td></tr>
 <tr><td>2015</td><td>Andre Iguodala (Golden State Warriors )</td><td>16.2%</td><td>16.3</td></tr>
 <tr><td>2016</td><td>LeBron James (Cleveland Cavaliers)</td><td>29.6%</td><td>29.7</td></tr>
 <tr><td>2017</td><td>Kevin Durant (Golden State Warriors )</td><td>28.9%</td><td>35.2</td></tr>
</tbody></table></div>

[Link to download dataset](/assets/2017/12/NBA_Finals_MVP_-_Normalized_Scoring.xlsx)
