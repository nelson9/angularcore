using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using SendGrid;
using SendGrid.Helpers.Mail;
using SpanishInLondon.Web.Model;

namespace SpanishInLondon.Web.Controllers
{

    public enum Level
    {
        A0 = 1,
        A1,
        A2,
        B1,
        B2,
        C1,
        C2
    }

    public class Queestion
    {
        public string Question { get; set; }
        public string Answer { get; set; }
        public List<string> Options { get; set; }
    }

    public class QuestionSet
    {
        public List<Queestion> Questions { get; set; }
        public Level Level { get; set; }
    }


    [Route("api/[controller]")]
    public class LevelTestController : Controller
    {

        private readonly IHostingEnvironment _hostingEnvironment;



        public LevelTestController(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        public IActionResult Get()
        {
            var questonSetList = new List<QuestionSet>{};

            var questionsA1 = new QuestionSet
            {
                Questions = new List<Queestion>(),
                Level = Level.A1
            };
            var questionsA2 = new QuestionSet
            {
                Questions = new List<Queestion>(),
                Level = Level.A2
            };
            var questionsB1 = new QuestionSet
            {
                Questions = new List<Queestion>(),
                Level = Level.B1
            };
            var questionsB2 = new QuestionSet
            {
                Questions = new List<Queestion>(),
                Level = Level.B2
            };
            var questionsC1 = new QuestionSet
            {
                Questions = new List<Queestion>(),
                Level = Level.C1
            };

            questonSetList.Add(questionsA1);
            questonSetList.Add(questionsA2);
            questonSetList.Add(questionsB1);
            questonSetList.Add(questionsB2);
            questonSetList.Add(questionsC1);

            string level = _hostingEnvironment.WebRootPath + "/resources/LevelTest.csv";
       
            using (var reader = new StreamReader(level))
            {
                while (!reader.EndOfStream)
                {
                    
                    var line = reader.ReadLine();
                  
                    if (line != null)
                    {
                        Regex csvParser = new Regex(",(?=(?:[^\"]*\"[^\"]*\")*(?![^\"]*\"))");
                        var values = csvParser.Split(line);

                        if (values[6] == "A1")
                            questionsA1.Questions.Add(new Queestion
                            {
                                Question = values[0],
                                Answer = values[1],
                                Options = new List<string>
                            {
                                values[2],
                                values[3],
                                values[4],
                                values[5]
                            }
                            });
                        else if (values[6] == "A2")
                        {
                            questionsA2.Questions.Add(new Queestion
                            {
                                Question = values[0],
                                Answer = values[1],
                                Options = new List<string>
                            {
                                values[2],
                                values[3],
                                values[4],
                                values[5]
                            }
                            });
                        }
                        else if (values[6] == "B1")
                        {
                            questionsB1.Questions.Add(new Queestion
                            {
                                Question = values[0],
                                Answer = values[1],
                                Options = new List<string>
                            {
                                values[2],
                                values[3],
                                values[4],
                                values[5]
                            }
                            });
                        }
                        else if (values[6] == "B2.1")
                        {
                            questionsB2.Questions.Add(new Queestion
                            {
                                Question = values[0],
                                Answer = values[1],
                                Options = new List<string>
                            {
                                values[2],
                                values[3],
                                values[4],
                                values[5]
                            }
                            });
                        }
                        else if (values[6] == "B2.2")
                        {
                            questionsC1.Questions.Add(new Queestion
                            {
                                Question = values[0],
                                Answer = values[1],
                                Options = new List<string>
                            {
                                values[2],
                                values[3],
                                values[4],
                                values[5]
                            }
                            });
                        }
                    }
                    
                }
            }

            return Ok(questonSetList);
        }

    }
}
