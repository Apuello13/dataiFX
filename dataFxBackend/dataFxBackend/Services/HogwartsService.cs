using dataFxBackend.Context;
using dataFxBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace dataFxBackend.Services
{
    public class HogwartsService : IHogwartsService
    {
        private AppDbContext _context;

        public HogwartsService(AppDbContext context) {
            _context = context;
        }

        public bool save(Hogwarts hogwarts)
        {
            try
            {
                if (checkEscuela(hogwarts.Casa))
                {
                    if (hogwarts.Id != 0)
                        _context.Update(hogwarts);
                    else
                        _context.Add(hogwarts);
                    _context.SaveChanges();
                }
                else {
                    return false;
                }
            }
            catch (Exception e)
            {
                Console.Write(e.Message);
                return false;
            }
            return true;
        }

        public Boolean checkEscuela(string escuelaForm) {
            Boolean isValid = false;
            List<string> escuelas = new List<string> { "Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin" };
            escuelas.ForEach(escuela => {
                if (escuela.ToUpper().Equals(escuelaForm.ToUpper()))
                    isValid = true;
            });
            return isValid;
        }

        public IEnumerable<Hogwarts> GetHogwarts()
        {
            List<Hogwarts> hogwarts = new List<Hogwarts>();
            try
            {
                hogwarts = _context.hogwarts.ToList();
            }
            catch (Exception e)
            {
                return null;
            }
            return hogwarts;
        }

        public bool deleteById(int Id)
        {
            try {
                Hogwarts hogwarts = getById(Id);
                if (hogwarts == null)
                    return false;
                _context.hogwarts.Remove(hogwarts);
                _context.SaveChanges();
            }
            catch (Exception e) {
                return false;
            }
            return true;
        }

        public Hogwarts getById(int Id)
        {
            Hogwarts hogwarts = null;
            try {
                hogwarts = _context.hogwarts.FirstOrDefault(hogwart => hogwart.Id == Id);
            }
            catch (Exception e) {
                return null;
            }
            return hogwarts;
        }
    }
}
