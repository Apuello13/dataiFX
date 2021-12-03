using dataFxBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dataFxBackend.Services
{
    public interface IHogwartsService
    {
        Boolean save(Hogwarts hogwarts);

        IEnumerable<Hogwarts> GetHogwarts();

        Boolean deleteById(int Id);

        Hogwarts getById(int Id);
    }
}
